const request = require('request');
const { DataStoreUtils } = require('gpap-pipeline-gcp-clients/gcp_clients/datastore_client');

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//									 	Worker function
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

/**
 * Obtain the current JWT token for the Raiser's Edge REST API from DataStore.
 * This must have already been set up. TODO: write some functionality to automate this process.
 */
function getJWTAuthorizationHeaders() {
    return new Promise((resolve, reject) => {
        DataStoreUtils.GetAPIKey('Raisers_Edge_REST_API_key')
            .then((api_key) => {
                resolve({
                    Authorization: `Bearer ${api_key}`,
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
}
/**
 * The generic function which makes calls to the Raisers Edge REST API.
 * @param {String} url
 * @param {String} verb
 * @param {Object|null} request_body
 */
exports.performRequest = (url, verb = 'GET', request_body) => new Promise((resolve, reject) => {
    getJWTAuthorizationHeaders()
        .then((headers) => {
            const options = {
                method: verb,
                url,
                headers,
                json: request_body,
                rejectUnauthorized: false, // TODO: resolve the lack of a good certificate chain on the reverse proxy IP
            };

            request(options, (error, response, body) => {
                if (error) {
                    reject(error);
                    return;
                }

                // FIXME: See Issue #50. determine why in some cases, the body is not being parsed to a JS native object, despite the header being set correctly (ie to 'application/json').
                if (response.headers['content-type'] === 'application/json' && typeof body === 'string' && body.length > 0) {
                    body = JSON.parse(body);
                }

                resolve({ error, response, body });
            });
        });
});
