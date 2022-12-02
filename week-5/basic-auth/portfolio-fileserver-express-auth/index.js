const basicAuth = require("basic-auth");

module.exports.auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "21" || creds.pass != "12") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see the canvas game:"'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};