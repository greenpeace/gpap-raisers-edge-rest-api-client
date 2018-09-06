
const util = require('util');

const { encodeSQL } = require('./avoid_sqli');

const is_production = process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'PRODUCTION';
const RaisersEdge_RESTAPI_Host = process.env.RAISERS_REST_HOST || (is_production ? 'https://raisersedge.greenpeace.org.au' : 'https://raisersedgestaging.greenpeace.org.au');
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
//								Endpoints defined by the API
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
// TODO: build a full OAS description of this

exports.Action = {
    Create: {
        endpoint: () => util.format('%s/action', RaisersEdge_RESTAPI_Host),
        method: 'POST',
    },
};
exports.Appeal = {
    Read: {
        endpoint: appeal_name => util.format('%s/appeal/%s', RaisersEdge_RESTAPI_Host, appeal_name),
        method: 'GET',
    },
};
exports.AttributeTypeServer = {
    Read: {
        endpoint: (namespace, type, query_params = '') => util.format('%s/attributetypeserver/info/%s/%s?%s', RaisersEdge_RESTAPI_Host, namespace, type, query_params),
        method: 'GET',
    },
    ReadUniqueness: {
        endpoint: attribute_type_id => util.format('%s/attributetypeserver/uniqueness/%s', RaisersEdge_RESTAPI_Host, attribute_type_id),
        method: 'GET',
    },
};
exports.Attributes = {
    Create: {
        endpoint: attribute_record_type => `${RaisersEdge_RESTAPI_Host}/attributes/${attribute_record_type}`,
        method: 'POST',
    },
};
exports.Bank = {
    Create: {
        endpoint: () => util.format('%s/bank', RaisersEdge_RESTAPI_Host),
        method: 'POST',
    },
};
exports.Banks = {
    Search: {
        endpoint: where => util.format('%s/banks?is_base64=1&where=%s', RaisersEdge_RESTAPI_Host, encodeSQL(where)),
        method: 'GET',
    },
};
exports.CodeTableEntry = {
    Create: {
        endpoint: () => util.format('%s/table_entry', RaisersEdge_RESTAPI_Host),
        method: 'POST',
    },
};
exports.Constituent = {
    Create: {
        endpoint: () => util.format('%s/constituent', RaisersEdge_RESTAPI_Host),
        method: 'POST',
    },
    Read: {
        endpoint: (constituent_id, query_params = '') => util.format('%s/constituent/%s?%s', RaisersEdge_RESTAPI_Host, constituent_id, query_params),
        method: 'GET',
    },
    Update: {
        endpoint: constituent_id => util.format('%s/constituent/%s', RaisersEdge_RESTAPI_Host, constituent_id), // TODO: support query params to get all child arrays
        method: 'PUT',
    },
    Search: {
        endpoint: (where, query_params = '') => `${RaisersEdge_RESTAPI_Host}/constituents?is_base64=1&where=${encodeSQL(where)}${query_params.length > 0 ? `&${query_params}` : ''}`,
        method: 'GET',
    },
};
exports.Financial = {
    Create: {
        endpoint: () => util.format('%s/financial', RaisersEdge_RESTAPI_Host),
        method: 'POST',
    },
};
exports.Gift = {
    BatchAdd: {
        endpoint: batch_id => util.format('%s/gift/batch/%s', RaisersEdge_RESTAPI_Host, batch_id),
        method: 'POST',
    },
    BatchRead: {
        endpoint: batch_id => util.format('%s/gift/batch/%s', RaisersEdge_RESTAPI_Host, batch_id),
        method: 'GET',
    },
    Create: {
        endpoint: () => util.format('%s/gift', RaisersEdge_RESTAPI_Host),
        method: 'POST',
    },
    CreateInstallment: {
        endpoint: gift_lookup_id => util.format('%s/gift/%s/installment', RaisersEdge_RESTAPI_Host, gift_lookup_id),
        method: 'POST',
    },
    CreateAmendment: {
        endpoint: (gift_lookup_id, query_params = '') => util.format('%s/gift/%s/amendment?%s', RaisersEdge_RESTAPI_Host, gift_lookup_id, query_params),
        method: 'POST',
    },
    CreateAdjustment: {
        endpoint: gift_lookup_id => util.format('%s/gift/%s/adjustment', RaisersEdge_RESTAPI_Host, gift_lookup_id),
        method: 'POST',
    },
    Delete: {
        endpoint: (gift_id, query_params = '') => util.format('%s/gift/%s?%s', RaisersEdge_RESTAPI_Host, gift_id, query_params),
        method: 'DELETE',
    },
    Read: {
        endpoint: (gift_id, query_params = '') => util.format('%s/gift/%s?%s', RaisersEdge_RESTAPI_Host, gift_id, query_params),
        method: 'GET',
    },
    Update: {
        endpoint: (gift_id, query_params = '') => util.format('%s/gift/%s?%s', RaisersEdge_RESTAPI_Host, gift_id, query_params),
        method: 'PUT',
    },
    Search: {
        endpoint: (where, query_params = '') => `${RaisersEdge_RESTAPI_Host}/gifts?is_base64=1&where=${encodeSQL(where)}${query_params.length > 0 ? `&${query_params}` : ''}`,
        method: 'GET',
    },
};
