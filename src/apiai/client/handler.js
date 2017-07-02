'use strict';

const requestPromise = require('request-promise');
const HEADERS = { 'Authorization': `Bearer ${process.env.APIAI_CLIENT_TOKEN}` };
const ISJSON = true;

class Handler {
    post (request, reply) {
        let timezone = new Date();
        let payload = {
            "query": request.payload.query,
            "timezone": timezone,
            "lang": "pt-br",
            "sessionId": "d828dd6f-7865-4ab2-a5fd-55d488f785e4"
        };
        let options = {
            method: 'POST',
            uri: 'https://api.api.ai/v1/query?v=20150910',
            headers: HEADERS,
            body: payload,
            json: ISJSON
        };

        requestPromise(options)
            .then((result) => {
                return reply({'query': result});
            })
            .catch((err) => {
                return reply({'error': err});
            })
    }

    get (request, reply) {
        let timezone = new Date();
        let query = request.query.query;
        let options = {
            uri: `https://api.api.ai/api/query?v=20150910&query=${query}&lang=pt-br&sessionId=${process.env.APIAI_SESSION_ID}&timezone=${timezone}`,
            headers: HEADERS,
            json: ISJSON
        };

        requestPromise(options)
            .then((result) => {
                return reply({'query': result})
            })
            .catch((err) => {

                return reply({'error': err});
            });
    }
}

module.exports = Handler;
