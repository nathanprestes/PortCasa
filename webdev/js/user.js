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
	
	$('body.listas').append('<div id="header_fundo"></div>');
	
	$('.minha-conta').append('<div id="header_fundo"></div>');
	$('.minha-conta .searchWrapper').first().appendTo('.minha-conta #header');
	$('.minha-conta #chat_online').first().appendTo('.minha-conta .searchWrapper').first();
	
	$('.meus-pedidos .nav, .meus-pedidos .content-meuspedidos').wrapAll('<div id="tabela_login"><div id="tabela_login_conteudo"></div></div>');
	
	$('.minha-conta #ctl00_Conteudo_pnlAreaRoot').wrap('<div id="tabela_login"></div>');
	
	$('.editar-conta .mainContentWrapper .content').wrap('<div id="tabela_login"></div>');
	
	$('.listas .abas, .listas #sideBar, .listas #content').wrapAll('<div id="tabela_login"><div id="tabela_login_conteudo"></div></div>');
	
	$('.minha-conta ul.abas').appendTo('#tabela_login');
	
	$('.editar-conta .addPhoto .lnkAddPhoto').html('Adicionar Foto');
	
	$('.meus-pedidos-detalhes .mainContentWrapper').append('<div id="tabela_login"><div id="tabela_login_conteudo"><ul class="abas"><li class="meu-perfil"><a href="/Vitrine/MinhaConta/MinhaConta.aspx" title="Meu Perfil">Meu Perfil</a></li><li class="meus-pedidos ativo"><a title="Meus Pedidos">Meus Pedidos</a></li><li class="listas"><a href="/lista/" title="Meus Pedidos">Listas</a></li></ul><div id="sideBar"><div class="sideBarItem linkList"><h2>Meu perfil</h2><ul><li><a title="Meu Perfil" href="/Vitrine/MinhaConta/MinhaConta.aspx">Meu Perfil</a></li><li><a title="Editar dados" href="/Site/cadastroCliente.aspx">Editar dados</a></li><li><a title="Alterar senha" href="/site/AlterarSenha.aspx">Alterar senha</a></li></ul></div><div class="sideBarItem linkList"><h2>Meus Endereços</h2><ul><li><a title="Catálogo de Endereços" href="/Site/Endereco.aspx">Catálogo de Endereços</a></li></ul></div><div class="sideBarItem linkList"><h2>Listas</h2><ul class="menu"><li><a href="/lista/">Buscar uma Lista</a></li><li><a href="/lista/criar/">Criar nova Lista</a></li><li><a href="/lista/gerenciar/">Gerenciar minhas Listas</a></li></ul></div></div><div id="content"></div></div></div>');
	
	$('.meus-pedidos-detalhes .content').appendTo('#content');
	
	$('.meus-pedidos-detalhes .dados-entrega').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	
	$('.meus-pedidos-detalhes .box-dados-pedido .descricao-entrega').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	
	$('.meus-pedidos-detalhes #ctl00_Conteudo_controleDadosPagamento_fieldsetDadosPagamento').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	
	$('.meus-pedidos-detalhes .box-dados-pedido .descricao-compra').appendTo('.meus-pedidos-detalhes .content');

	//Cufon.replace('.menu li, .content .bt, .content #ctl00_Conteudo_ctrlEndereco_BtnSalvar.bt, .cadastro-cliente #ctl00_Conteudo_ctrlCadastroCliente_bntNewUserAdd, .bt, .minha-conta .area-3-2-3 h3, .minha-conta .abas li a, .minha-conta .nav h3, .minha-conta .area-3-2-3 h4, .minha-conta .area-3-2-5 h3, .minha-conta .area-3-2-10 h3, .meus-pedidos .content-meuspedidos h2', { fontFamily: 'Androgyne' });
});