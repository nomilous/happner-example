module.exports = Component;

function Component() {
  this.methodSeq = 0;
  this.eventSeq = 0;
}

Component.prototype.start = function($happn, callback) {
  callback(null);
  setInterval(function() {
    $happn.emit('pa/th', {seq: this.eventSeq++});
  }, 1000);
}

Component.prototype.method = function($happn, callback) {
  callback(null, {seq: this.methodSeq++});
}
