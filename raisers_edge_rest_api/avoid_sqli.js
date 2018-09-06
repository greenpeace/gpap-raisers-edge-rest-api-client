/**
 * CloudFlare blocks SQL injection attacks (and rightly so). However,
 * one feature of the REST API invoices actually sending REAL SQL to it.
 * When sending certain SQL statements, Cloudflare block
 * @param {String} where_clause
 */
exports.encodeSQL = where_clause => Buffer.from(where_clause).toString('base64');
