$(document).ready(function() {
	var dday = new Date("4/27/2013");
	var miliseconds = dday.getTime();
	var now = Date.now();
	var elapsed = now-miliseconds;
	var seconds = (elapsed/ 1000).toFixed(0);
	var clock = $('.clock').FlipClock(seconds, {
		clockFace: 'DailyCounter',
		countdown: false
	});
});