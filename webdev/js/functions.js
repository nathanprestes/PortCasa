$(document).ready(function() {
	
	/*$("legend").each(function() {
		var text = $(this).text();
		text = text.replace("a", "ADD");
		$(this).text(text);
	});*/
	
	$('#menu h3').first().css('background', 'none');
	
	$('#image-main').clone().appendTo('.stepProdImage');
	
	$('#socialShare #gplus').html('<g:plusone></g:plusone>');
	
	
	
	$('#sideBar #departmentNavigator .menu-departamento h3 span').click(function(){
	
		$(this).parent().next('ul').slideToggle();	
	
	});
	$('#sideBar #departmentNavigator .menu-departamento ul').each(function(){
		$(this).after('<span class="separator"></span>');
	});
	
	
	
	/* add pinterest*/
	
	var imgSrcPin = $('.apresentacao #image img').attr('src');
	var domainPin = document.domain;
	
	var imgPin = domainPin + imgSrcPin
	var locationPin = window.location
	
	$('#socialShare #pinterest').html('<a href="http://pinterest.com/pin/create/button/?url='+locationPin+'&media=http://'+imgPin+'" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>');
	
	
	
	$('.addLista').click(function(){
		$('#productList').slideToggle();
	});
	
	//banner por categoria
	
	var linkHref = document.location.href.split('/');
	var linkCategoria = linkHref[3];
	
	if (linkCategoria.indexOf('#') != -1){
		newLink = linkCategoria.split('#');
		linkCategoria = newLink[0];
	}else if (linkCategoria.indexOf('?') != -1){
		newLink = linkCategoria.split('?');
		linkCategoria = newLink[0];
	}	
	
	$('body.categoria #content .topBanners#'+linkCategoria).removeClass('inactive');
	$('body.departamento #content .topBanners#'+linkCategoria).removeClass('inactive');
	

		
});

$(document).ajaxComplete(function(event,request, settings){
	if ($("body").attr("class") == "produto"){
		
		/*Qantidade mais e menos */
		var prodNum= parseFloat($('.productQuantity').val());
		
		
		$('.btnsQntyMais').click(function(){
			prodNum = prodNum +1;
			$('.productQuantity').attr('value', prodNum);
		});

		$('.btnsQntyMenos').click(function(){
			prodNum = prodNum -1;
			$('.productQuantity').attr('value', prodNum);
		});
		
		$('#wrapStepThree .buy-button').click(function() {	
			
			if ($("#wrapStepThree .buy-button").attr("href") != "javascript:alert('')"){
				var prodHref = $("#wrapStepThree .buy-button").attr("href").split("&quantidade=");
				var qntyUrl = prodHref[0]+"&quantidade="+prodNum;
				$("#wrapStepThree .buy-button").attr("href", qntyUrl);
			}
			
		});
		
		$('#show .thumbs li img').each(function(){
			var toSplit = $(this).attr('src');
			var newSrc = toSplit.replace('_3', '_29');
			$(this).attr('src', newSrc);
		});
	};
});