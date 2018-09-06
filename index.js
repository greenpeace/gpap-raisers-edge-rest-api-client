const uuid = require('uuid/v1');
const has = require('lodash/has');
const http_status_codes = require('http-status-codes');
const endpoints = require('./raisers_edge_rest_api/endpoints');
const runner = require('./raisers_edge_rest_api/request_runner');
const schema = require('./raisers_edge_rest_api/schema');
const logger = require('./raisers_edge_rest_api/logger');

/**
 * The `Schema` property makes the schema used by Raisers Edge REST API available programatically.
 */
exports.Schema = schema;

/**
 * This function iterates through the endpoint definitions in ./endpoints and adds them to a callable object (which is exported by this module).
 * The information in the endpoint definitions is used to build bound functions (via .bind()), which are then called by providing information about the request body and query params.
 *
 * The resulting functions should be called as:
 * @param {Object} - the request body to be sent
 * @param {...String[]} - the Strings that will be parsed into the util.format() command that builds the endpoint
 *
 */
function BuildEndpoints() {
    const out = {};
    for (const resource_type of Object.keys(endpoints)) {
        out[resource_type] = {};
        for (const endpoint of Object.keys(endpoints[resource_type])) {
            const endpoint_description = endpoints[resource_type][endpoint];
            out[resource_type][endpoint] = CallRESTEndpoint.bind(null, endpoint_description);
        }
    } // TODO: optimize this so the linter doesn't complain. Maybe ask Peter!

    return out;
}
exports.RaisersEdgeRestAPI = BuildEndpoints();


/**
 * Pull data out of the args array and send it to the endpoint.
 * @param {Object} endpoint_description - the first argument is an Object that describes the endpoint
 * @param {Object|null} request_body - The second argument is an Object that will be sent as the body of the request
 * @param {...String} parameters - The remaining N arguments are strings that will be formatted into the endpoint string (defined in ./endpoints)
 */
async function CallRESTEndpoint(endpoint_description, request_body, ...parameters) {
    const { stack } = (new Error());
    const endpoint = endpoint_description.endpoint(...parameters);
    const result = await runner.performRequest(endpoint, endpoint_description.method, request_body);
    throwExceptionIfResultHasErrors(result, {
        endpoint, request_body, method: endpoint_description.method, stack_from_caller: stack,
    });
    return result;
}

/**
 * The default behaviour of the Raiser's Edge REST API on an error is very UN-opinionated.
 * It simply returns with a non-specific 500 error code and a JSON body payload containing
 * the native error from Raiser's Edge.
 * This function detects this basic case and throws an error by default. This saves having to write generic
 * error handling code around Client API calls.
 * @param {Object} result
 */
function throwExceptionIfResultHasErrors(result, {
    endpoint, request_body, method, stack_from_caller,
}) {
    const { error, body: response_body, response } = result;

    if (isServerError(response) || isTransportError(error)) {
        const error_message_body = isRaisersEdgeError(response_body) ? ParseRaisersEdgeError(response_body) : response_body;
        const error_to_throw = CreateNewError(error_message_body, stack_from_caller);
        const error_msg = {
            error_id: uuid(),
            message: error_message_body || "An error was returned from the Raiser's Edge REST API",
            request: {
                endpoint,
                method,
                body: request_body,
            },
            response: {
                statusCode: response.statusCode,
                error,
                body: error_message_body,
            },
            cloud_function_data: global.cloud_function_data,
            error_stack: error_to_throw.stack,
        };
        logger.error(error_msg);

        throw error_to_throw;
    }
}

/**
 * Build an error by concatenating the stack trace of the current context with that of the context of the
 * caller of `HandleRaisersEdgeRESTAPIErrors`.
 * This function is necessary as simply throwing an error from `HandleRaisersEdgeRESTAPIErrors` provides
 * an insufficiently long stack trace to be useful in debugging.
 * @param {Object} error_message an object containing error information to be logged into StackDriver
 * @param {String} stack_from_caller The `stack` property of an error from the calling function's context
 */
function CreateNewError(error_message, stack_from_caller) {
    const re_rest_api_error = new Error(JSON.stringify(error_message, null, 2));
    re_rest_api_error.stack = `${re_rest_api_error.stack}\n\n${stack_from_caller}`;
    return re_rest_api_error;
}

/**
 * Detect an error in the Raiser's Edge REST API by looking at the status code
 * in the response.
 * @param {Object} response response object from the `request` library
 */
function isServerError(response) {
    return response.statusCode >= http_status_codes.INTERNAL_SERVER_ERROR;
}

/**
 * Detect errors during the HTTP request/response process.
 * @param {http.ClientRequest|Object} error an Error from the `request` library.
 */
function isTransportError(error) {
    return error === true;
}


/**
 * One error we can see from the RE REST API is a direct error re-emitted from Raiser's Edge itself.
 * If the error is of this type, then it will be an object in this format: {'error': "the error from Raiser's Edge"}.
 * @param {Object} re_api_response_body
 */
function isRaisersEdgeError(re_api_response_body) {
    return has(re_api_response_body, 'error');
}

/**
 * Removes junk text from the error message emitted by Raiser's Edge.
 *
 * One type is the direct error re-emitted from Raiser's Edge itself.
 * If the error is of this type, then it will be in this format: {'error': "the error from Raiser's Edge"}.
 * Unfortunately, these errors from RE have lots of random stuff included.
 * The purpose of this function is to strip that data out.
 *
 * If the error does not come from RE directly, the response will not be in the format described above.
 * In that case, we dont do any parsing on it.
 * @param {Object} response_from_re_api
 * @example
 * // returns "CPledgePayer, The specified gift is not a recurring gift."
 * ParseRaisersEdgeError({error: "com_error(-2147352567, 'Exception occurred.', (0, 'CPledgePayer', 'The specified gift is not a recurring gift.', None, 1000440, -2147219870), None)"});
 * @returns {String} A cleaned up version of the Raiser's Edge error
 */
function ParseRaisersEdgeError(response_from_re_api) {
    const error_start_regex = /com_error.*'Exception occurred.', \(0,/;
    const error_end_regex = /, None, 1000440,.*None\)/;
    const { error } = response_from_re_api;
    const re_error_with_weird_stuff_stripped_out = error.replace(error_start_regex, '').replace(error_end_regex, '').replace(/['"]/g, '').trim();
    return re_error_with_weird_stuff_stripped_out;
}


// /**
//  * Pull data out of the args array and send it to the endpoint.
//  * @param {Object} endpoint_description - the first argument is an Object that describes the endpoint
//  * @param {Object|null} body_data - The second argument is an Object that will be sent as the body of the request
//  * @param {...String} parameters - The remaining N arguments are strings that will be formatted into the endpoint string (defined in ./endpoints)
//  */
// async function CallRESTEndpoint(endpoint_description, body_data, ...parameters) {
//     const endpoint = endpoint_description.endpoint(...parameters);
//     const result = await runner.performRequest(endpoint, endpoint_description.method, body_data);
//     HandleRaisersEdgeRESTAPIErrors(result);
//     return result;
// }

// /**
//  * The default behaviour of the Raiser's Edge REST API on an error is very UN-opinionated.
//  * It simply returns with a non-specific 500 error code and a JSON body payload containing
//  * the native error from Raiser's Edge.
//  * This function detects this basic case and throws an error by default. This saves having to write generic
//  * error handling code around Client API calls.
//  * @param {Object} result
//  */
// function HandleRaisersEdgeRESTAPIErrors(result) {
//     const { error, body, response } = result;
//     if (response.statusCode === http_status_codes.INTERNAL_SERVER_ERROR && body.error !== undefined) {
//         throw new Error(body.error);
//     }

//     // Catch all server error status codes and throw the body
//     const server_error_status_space = 500;
//     if (response.statusCode >= server_error_status_space) {
//         throw new Error({ error, body });
//     }

//     // it is unlikely that this will be reached
//     if (error) {
//         throw new Error(error);
//     }
// }



