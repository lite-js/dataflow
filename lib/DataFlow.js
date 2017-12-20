const EventEmitter = require('wolfy87-eventemitter');

class DataFlow extends EventEmitter {
    isDataFlow = true;

    constructor() {
        super();
    }
}

module.exports = DataFlow;
