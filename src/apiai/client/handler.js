'use strict';

const requestPromise = require('request-promise');

class Handler {
    get (request, reply) {
        let timezone = new Date();
        let query = request.query.query;

        let options = {
            uri: `https://api.api.ai/api/query?v=20150910&query=${query}&lang=pt-br&sessionId=${process.env.APIAI_SESSION_ID}&timezone=${timezone}`,
            headers: {
                'Authorization': `Bearer ${process.env.APIAI_CLIENT_TOKEN}`
            },
            json: true
        };

        requestPromise(options)
            .then((result) => {
                return reply({'query': result})
            })
            .catch((err) => {

                return reply({'err': err});
            });
    }
}

module.exports = Handler;
