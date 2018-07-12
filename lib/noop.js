var noop = function() {};
module.exports = {};

module.exports.prevent = function(cb) {
    return process.nextTick(() => {
        noop();
    }); 
};

module.exports.allow = function() {
    return;
};

