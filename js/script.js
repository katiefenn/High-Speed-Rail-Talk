/* Author: 

*/

var index = 0;
$(document).ready(function() {
	$(document).keydown(function(event) {
	
		if (event.keyCode == 39) {
			event.preventDefault();
			index = index + 1;
			$(window).scrollLeft(index * $('body').width());
		}
		
		if (event.keyCode == 37) {
			event.preventDefault();
			index = index - 1;
			$(window).scrollLeft(index * $('body').width());
		}
	});
});



















