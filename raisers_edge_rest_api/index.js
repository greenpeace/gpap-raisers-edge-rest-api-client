const endpoints = require('./endpoints');
const runner = require('./request_runner');

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
  return result;
}


exports.RaisersEdgeRestAPI = BuildEndpoints();
