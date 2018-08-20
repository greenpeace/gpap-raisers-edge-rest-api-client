const http_status_codes = require('http-status-codes');
const endpoints = require('./raisers_edge_rest_api/endpoints');
const runner = require('./raisers_edge_rest_api/request_runner');
const schema = require('./raisers_edge_rest_api/schema');

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

/**
 * Pull data out of the args array and send it to the endpoint.
 * @param {Object} endpoint_description - the first argument is an Object that describes the endpoint
 * @param {Object|null} body_data - The second argument is an Object that will be sent as the body of the request
 * @param {...String} parameters - The remaining N arguments are strings that will be formatted into the endpoint string (defined in ./endpoints)
 */
async function CallRESTEndpoint(endpoint_description, body_data, ...parameters) {
    const endpoint = endpoint_description.endpoint(...parameters);
    const result = await runner.performRequest(endpoint, endpoint_description.method, body_data);
    HandleRaisersEdgeRESTAPIErrors(result);
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
function HandleRaisersEdgeRESTAPIErrors(result) {
    const { error, body, response } = result;
    if (response.statusCode === http_status_codes.INTERNAL_SERVER_ERROR && body.error !== undefined) {
        throw new Error(body.error);
    }

    // Catch all server error status codes and throw the body
    const server_error_status_space = 500;
    if (response.statusCode >= server_error_status_space) {
        throw new Error({ error, body });
    }

    // it is unlikely that this will be reached
    if (error) {
        throw new Error(error);
    }
}


exports.RaisersEdgeRestAPI = BuildEndpoints();
