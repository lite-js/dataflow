const EventEmitter = require('wolfy87-eventemitter');

class DataFrame extends EventEmitter {
    isDataFrame = true;

    constructor() {
        super();
    }

    validate() {
    }
}

module.exports = DataFrame;
