'use strict';

class Handler {
    get () {
        console.log('test');
        return {
            'test': 'test!'
        }
    }
}

module.exports = Handler;
