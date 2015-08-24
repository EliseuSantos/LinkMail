$( document ).ready(function() {
  var chat_template = $('#chat-template').html();
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

  $('#chat-content').on('keyup', '#mensagem', function(evt) {
    if(evt.which == 13) {
      $(this).val('');
    }
  });
  $('.open-chat').click(function(e) {
    e.preventDefault();
    $('#chat-content').html('');
    var nome = $(this).data('pessoa');
    var status = $(this).data('status');
    $('#chat-content').html(chat_template).find('label').append(nome);
    if(status == 'online') {
      $('.status').show();
    }else {
      $('.status').hide();
    }
  });

  $('#chat-content').on('click', '.close-chat', function() {
    $(this).closest('.chat-box').remove();
  });
});
