'use strict';

const Handler = require('./handler');
const handler = new Handler();

module.exports = [
    {
        method: 'GET',
        path: '/v1/apiai/developer/intents',
        handler: handler.get
    }
]
