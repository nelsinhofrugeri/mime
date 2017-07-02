'use strict';

require('dotenv').config();

const Hapi = require('hapi');
const hapiRouter = require('hapi-router');

const server = new Hapi.Server();

server.connection({
    port: 7000
});

server.register({
    register: hapiRouter,
    options: {
        routes: '**/*routes.js'
    }
}, (err) => {
    if (err) throw err;
})

server.start((err) => {
    if(!err) {
        console.log('API is stading ', server.info.uri);
    }
    else {
        console.log('API is in error ', err);
    }
});
