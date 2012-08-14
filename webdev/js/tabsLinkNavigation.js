var get = getUrlVars();
$(function() {
	$('#collectionNavigation a').click(function() {
		var id = $(this).parent().attr('id');
		var order = $('#O');
		
		order.find('[selected="selected').removeAttr('selected');
		
		if (id == "OrderClear") {
			order.find('option').eq(0).attr('selected', 'selected').change();
		} else {
			order.find('[value="' + id +'"]').eq(0).attr('selected', 'selected').change();
		}
		
	});
	
	var getId = getUrlVars()['O'];
	if (getId != undefined && getId != '') {
		var list = $('#collectionNavigation');
		
		list.find('.selected').removeClass('selected');
		list.find('#' + getId).addClass('selected');
	}
});

function getUrlVars() {
	var map = {};
	var parts = window.location.search.replace(/[?&]+([^=&]+)(=[^&]*)?/gi, function(m,key,value) {
		map[key] = (value === undefined) ? true : value.substring(1);
	});
	return map;
}
