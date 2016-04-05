module.exports = Component;

function Component() {
  this.methodSeq = 0;
  this.eventSeq = 0;
}

Component.prototype.start = function($happn, callback) {
  var _this = this;
  setInterval(function() {
    $happn.emit('pa/th', {seq: _this.eventSeq++});
  }, 1000);
  callback(null);
}

Component.prototype.method = function($happn, callback) {
  callback(null, {seq: this.methodSeq++});
}
