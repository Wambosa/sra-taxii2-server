'use strict';

module.exports = (req, res, next) => {
    const statusCode = res.responseStatus || 200;

    // respond with html page
    if (req.accepts('html')) {
        return res.render(res.locals.taxiiRenderTemplate, {
            title: res.locals.taxiiRenderTitle,
            data: res.data
        });
    } 

    res.setHeader('content-type', 'application/vnd.oasis.taxii+json; version=2.0');
    return res.send(res.data);
};