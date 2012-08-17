$(document).ready(function() {
	
	/*$("legend").each(function() {
		var text = $(this).text();
		text = text.replace("a", "ADD");
		$(this).text(text);
	});*/
	
	$('#menu h3').first().css('background', 'none');
	$('#menu h3 a').first().css('margin-left', '0px');
	
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
	
	if($('.produto #wrapStepTwo') && $('.topic').length == 0){
		$('#wrapStepTwo').css('display', 'none');
		$('#wrapStepThree .stepNumber').text('2');
	}
	
	$('.produto #carousel_inner .prateleira h2').insertAfter('#content #caracteristicas');
	
	//CAROUSEL
	
	//opções( 1 - ON , 0 - OFF)
	var auto_slide_seconds = 2000;
	
	//efeito loop
	$('#carousel_container ul li:first').before($('#carousel_container ul li:last'));
	//quando clicar nas setas
	$('#right_scroll').click(function(){slide('right');});
	$('#left_scroll').click(function(){slide('left');});
	
	var LinkProduto = window.location.href;  
	
	$('#comentarioFacebook').html('<div class="fb-comments" data-href="'+LinkProduto+'" data-num-posts="2" data-width="890"></div>');
});

//função do carousel
function slide(where){
	//pega a largura
	var item_width = $('#carousel_container ul li').outerWidth() + 10;
	if(where == 'left'){
		//quanto vai avançar para esquerda
		var left_indent = parseInt($('#carousel_container ul').css('left')) + item_width;
	}else{
		//quanto vai avançar para direita
		var left_indent = parseInt($('#carousel_container ul').css('left')) - item_width;
	}
	$('#carousel_container ul:not(:animated)').animate({'left' : left_indent},1,function(){
		if(where == 'left'){
			//arruma caso precise fazer o loop
			$('#carousel_container ul li:first').before($('#carousel_container ul li:last'));
		}else{
			//arruma caso precise fazer o loop
			$('#carousel_container ul li:last').after($('#carousel_container ul li:first'));
		}
		//largura do ul
		$('#carousel_container ul').css({'left' : '-232px'});
	})
}
		

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