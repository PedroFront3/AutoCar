$(function(){

    abrirJanela();
    fecharJanela();

    function abrirJanela() {
        $('.list-mobile').click(function(e){
            e.stopPropagation();
            $('.opacity-modal').fadeIn();
        });
    }

    function fecharJanela() {
       let el = $('body,.btn-fechar');
       el.click(function(){
         $('.opacity-modal').fadeOut();
       });
    }

    $('.opacity-mobile').click(function(e){
        e.stopPropagation();
    })
})