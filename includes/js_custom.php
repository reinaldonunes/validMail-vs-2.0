<script src="js/jquery.js"></script> <!-- versão 11.2 -->
<script src="js/modernizr.js"></script> <!-- versão customizada para executar todas as featured do HTML5 e CSS3 -->
<script>
	/* abre o menu responsivo*/ 
	$("button.btn-nav").click(function(){
		$(this).toggleClass("open");
		$("nav#menu > ul").stop().slideToggle("fast");
	});
</script>