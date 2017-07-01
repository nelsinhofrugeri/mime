'use strict';

const Handler = require('./handler');
const handler = new Handler();

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: handler.get
    }
]
