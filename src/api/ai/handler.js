'use strict';

const requestPromise = require('request-promise');

class Handler {
    get (request, reply) {
        let options = {
            uri: 'https://api.api.ai/v1/intents?v=20150910',
            headers: {
                'Authorization': `Bearer ${process.env.APIAI_TOKEN}`
            },
            json: true
        };

        requestPromise(options)
            .then((intents) => {
                return reply({'intents': intents})
            })
            .catch((err) => {

                return reply({'err': err});
            });
    }
}

module.exports = Handler;
