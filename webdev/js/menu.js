var menuOutObject;
var menuOutTimer;
$(function() {
	$('#menu h3').hover(
		function() {
			menuOutObject = $(this).next();
			y = $(this).offset().left;
			menuOutObject.css('left', y);
		
			if (!menuOutObject.is(':visible')) {
				hideMenuSubItems($('#menu ul:visible'));
			}
			clearTimeout(menuOutTimer);
			menuOutObject.fadeIn();
		},
		function() {
			menuOutTimer = setTimeout(function() {
				hideMenuSubItems(menuOutObject);
			}, 10);
		}
	);
	
	$('#menu ul').hover(
		function() {
			menuOutObject = $(this);
			clearTimeout(menuOutTimer);
		},
		function() {
			menuOutTimer = setTimeout(function() {
				hideMenuSubItems(menuOutObject);
			}, 10);
		}
	);
});

function hideMenuSubItems(o) {
	o.fadeOut(10);
}