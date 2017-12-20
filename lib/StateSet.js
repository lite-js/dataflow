const EventEmitter = require('wolfy87-eventemitter');

class StateSet extends EventEmitter {
    isStateSet = true;

    constructor() {
        super();
    }
}

module.exports = StateSet;
