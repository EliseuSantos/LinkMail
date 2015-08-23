$( document ).ready(function() {
  $("#destino").keyup(function(){
    var pesq;
    var filter = $(this).val(), count = 0;
    var pesqClass = ['eliseuSantos,afraniaMaria'];
    if($(this).val().length > 3) {
      //Pesquisa logs visíveis e verifica se contem o valor digitado no campo #pesq-log
      pesqClass.each(function(){
        // Se não existir agendamentos
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
          alert($(this));
          // Mostra apenas os valores pesquisados se o return for 1
        } else {
          alert($(this));
        }
      });
    }
  });
});
