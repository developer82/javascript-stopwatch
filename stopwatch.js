module.exports = stopwatch;

function stopwatch(options) {
	this.options = options || {};
};

stopwatch.prototype.interval = 0;
stopwatch.prototype.clock = 0;
stopwatch.prototype.offset = 0;
stopwatch.prototype.name = 'ophir';

stopwatch.prototype.start = function() {
	if (!this.interval) {
		var that = this;
		
		this.offset = Date.now();
		this.interval = setInterval(function() {
			that.clock += Date.now() - that.offset;
		}, 1);
	}
};

stopwatch.prototype.stop = function() {
	if (this.interval) {
		clearInterval(this.interval);
		this.interval = 0;
	}
};

stopwatch.prototype.reset = function() {
	this.clock = 0;
};

stopwatch.prototype.elapsed = function() {
	return this.clock / 1000;
};