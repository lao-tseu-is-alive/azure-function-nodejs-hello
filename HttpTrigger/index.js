var crypto = require('crypto');

module.exports = async function(context, req) {
    const isNullOrUndefined = (variable) =>
    typeof variable === "undefined" || variable === null;

    const ip_header = req.headers['x-forwarded-for'];
    var source_ip = null;
    // if(typeof ip_header !== 'undefined') {
    if (!isNullOrUndefined(ip_header)) {
        if (ip_header.indexOf(':') > 0) {
            source_ip = ip_header.split(':')[0]
        }
    }
	context.log(`JavaScript HTTP trigger function processed a request. from ${source_ip}`);
    var md5 = null;
    const headers_string = JSON.stringify(req.headers)


    const name = (req.query.name || (req.body && req.body.name));
    if (!isNullOrUndefined(name)){
        md5 = crypto.createHash('md5').update(name).digest("hex");
    }
    const responseMessage = name
        ? `{"status": "success",\n"name": "${name}",\n"md5":"${md5}",\n"ip":"${source_ip}",\n"headers":\n${headers_string}\n}`
        : `{"status": "success",\n"name": null,\n"ip":"${source_ip}",\n"headers":\n${headers_string}\n}`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}