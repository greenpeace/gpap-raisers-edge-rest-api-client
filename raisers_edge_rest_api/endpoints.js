const util = require('util');

const RaisersEdge_RESTAPI_Host = 'https://raisersedge.greenpeace.org.au';

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
    endpoint: (namespace, type, qu_params = '') => util.format('%s/attributetypeserver/%s/%s?%s', RaisersEdge_RESTAPI_Host, namespace, type, qu_params),
    method: 'GET',
  },
  ReadUniqueness: {
    endpoint: attribute_type_id => util.format('%s/attributetypeserver/uniqueness/%s', RaisersEdge_RESTAPI_Host, attribute_type_id),
    method: 'GET',
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
    endpoint: where => util.format('%s/banks?where=%s', RaisersEdge_RESTAPI_Host, where),
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
    endpoint: (constituent_id, query_params = '') => util.format('%s/constituent/%s?%s', RaisersEdge_RESTAPI_Host, constituent_id, query_params), // TODO: support query params to get all child arrays
    method: 'GET',
  },
  Update: {
    endpoint: constituent_id => util.format('%s/constituent/%s', RaisersEdge_RESTAPI_Host, constituent_id), // TODO: support query params to get all child arrays
    method: 'PUT',
  },
  Search: {
    endpoint: where => util.format('%s/constituents?where=%s', RaisersEdge_RESTAPI_Host, where),
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
  Create: {
    endpoint: () => util.format('%s/gift', RaisersEdge_RESTAPI_Host),
    method: 'POST',
  },
  CreateInstallment: {
    endpoint: gift_lookup_id => util.format('%s/gift/%s/installment', RaisersEdge_RESTAPI_Host, gift_lookup_id),
    method: 'POST',
  },
  CreateAmendment: {
    endpoint: (gift_lookup_id, qu_params = '') => util.format('%s/gift/%s/amendment?%s', RaisersEdge_RESTAPI_Host, gift_lookup_id, qu_params),
    method: 'POST',
  },
  CreateAdjustment: {
    endpoint: gift_lookup_id => util.format('%s/gift/%s/adjustment', RaisersEdge_RESTAPI_Host, gift_lookup_id),
    method: 'POST',
  },
  Read: {
    endpoint: (gift_id, qu_params = '') => util.format('%s/gift/%s?%s', RaisersEdge_RESTAPI_Host, gift_id, qu_params),
    method: 'GET',
  },
  Update: {
    endpoint: (gift_id, qu_params = '') => util.format('%s/gift/%s?%s', RaisersEdge_RESTAPI_Host, gift_id, qu_params), // TODO: support query params to get all child arrays
    method: 'PUT',
  },
  Search: {
    endpoint: where => util.format('%s/gifts?where=%s', RaisersEdge_RESTAPI_Host, where),
    method: 'GET',
  },
};
