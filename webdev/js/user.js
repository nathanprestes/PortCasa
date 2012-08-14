$(document).ready(function() {
	$("body.checkout .searchWrapper:last, body.minha-conta .searchWrapper:last, body.fale-conosco .searchWrapper:last, body.sku .searchWrapper:last").addClass('bottomSearchWrapper');

	if ($("body").attr("class") == "carrinho")
	{
		$("iframe").attr( "scrolling", "no");
		$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
		$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		
		$("a.thickbox.tbstarted").click ( function ()
		{
			$("iframe").attr( "scrolling", "no");
			$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
			$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		});
		
		if ( $.browser.safari )
		{
			$("iframe").parent().css({ "width" : "600px", "height" : "400px", "overflow" : "hidden" });
			$("iframe").css({ "width" : "600px", "height" : "450px", "overflow" : "hidden" });
		}
	};
	
	if ($("body").attr("class") == "checkout")
	{
		$("iframe").attr( "scrolling", "no");
		$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
		$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		
		$("a.thickbox.tbstarted").click ( function ()
		{
			$("iframe").attr( "scrolling", "no");
			$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
			$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		});
		
		if ( $.browser.safari )
		{
			$("iframe").parent().css({ "width" : "600px", "height" : "400px", "overflow" : "hidden" });
			$("iframe").css({ "width" : "600px", "height" : "450px", "overflow" : "hidden" });
		}
	};
	
	
	$('body.login').append('<div id="header_fundo"></div>');
	
	$('body.endereco-compra').append('<div id="header_fundo"></div>');
	
	$('body.forma-pagamento').append('<div id="header_fundo"></div>');
	$('.footer').appendTo('#aspnetForm');
	
	$('body.confirmacao-compra').append('<div id="header_fundo"></div>');
	
	$('body.finaliza-compra').append('<div id="header_fundo"></div>');
	
	$('.minha-conta').append('<div id="header_fundo"></div>');
	$('.minha-conta .searchWrapper').first().appendTo('.minha-conta #header');
	$('.minha-conta #chat_online').first().appendTo('.minha-conta .searchWrapper').first();
	
	$('.meus-pedidos .nav, .meus-pedidos .content-meuspedidos').wrapAll('<div id="tabela_login"><div id="tabela_login_conteudo"></div></div>');
	
	$('.minha-conta #ctl00_Conteudo_pnlAreaRoot').wrap('<div id="tabela_login"></div>');
	
	$('.editar-conta .mainContentWrapper .content').wrap('<div id="tabela_login"></div>');
	
	$('.minha-conta ul.abas').appendTo('#tabela_login');
	
	//Cufon.replace('.menu li, .content .bt, .content #ctl00_Conteudo_ctrlEndereco_BtnSalvar.bt, .cadastro-cliente #ctl00_Conteudo_ctrlCadastroCliente_bntNewUserAdd, .bt, .minha-conta .area-3-2-3 h3, .minha-conta .abas li a, .minha-conta .nav h3, .minha-conta .area-3-2-3 h4, .minha-conta .area-3-2-5 h3, .minha-conta .area-3-2-10 h3, .meus-pedidos .content-meuspedidos h2', { fontFamily: 'Androgyne' });
});