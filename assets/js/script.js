$( document ).ready(function() {
  var chat_template = $('#chat-template').html();
  var baseUrl = 'http://' + window.location.host + '/linkmail/';
  $("#destino").keyup(function(){
    // var pesq;
    // var filter = $(this).val(), count = 0;
    // var pesqClass = ['eliseuSantos,afraniaMaria'];
    // if($(this).val().length > 3) {
    //   //Pesquisa logs visíveis e verifica se contem o valor digitado no campo #pesq-log
    //   pesqClass.each(function(){
    //     // Se não existir agendamentos
    //     if ($(this).text().search(new RegExp(filter, "i")) < 0) {
    //       alert($(this));
    //       // Mostra apenas os valores pesquisados se o return for 1
    //     } else {
    //       alert($(this));
    //     }
    //   });
    // }
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
  $('#btn-enviar').click(function() {
    $.ajax({
      type: 'POST',
      url: baseUrl + 'home/setEmail',
      dataType: "json",
      data:{
        destino: $('#destino').val(),
        assunto: $('#assunto').val(),
        mensagem: $('#mensagem').val(),
        usuario: 'eliseu',
        anexo: ''
        }
    });
    $('#novaMensagem').modal('hide');
  });
  var start=/@/ig; // @ Match
  var word=/@(\w+)/ig; //@abc Match

  $("#destino").keyup(function(){
    var content=$(this).val();
    var go= content.match(start);
    var name= content.match(word);
    var dataString = 'busca='+ name;
    if(go.length>0) {
      $("#msgbox").slideDown('show');
      $("#display").slideUp('show');
      $('#iconUser').removeClass('hide');
      $("#msgbox").html("Digite parte do nome para pesquisar usuários...");
      if(name.length>0 || name != null) {
        $.ajax({
          type: "POST",
          url: baseUrl + 'home/getContato',
          data: dataString,
          dataType: "json",
          success: function(data) {
            $("#display").html('<div class="display_box">'+
          '<img src="assets/img/perfil.jpg" class="image" width="49" height="45" />'+
          '<a href="#" class="addnome" title="'+data[0].nome+'">'+data[0].nome+'</a>'+
          '</div>').show();
            $(".addnome").click(function() {
              var Nome=$(this).attr('title');
              $("#destino").val(function(i, v) {
                return v.replace(word,Nome);
              });
              var E="<a class='red' contenteditable='false' href='#' >"+Nome+"</a>";
              $("#contentbox").append(E);
              $("#display").hide();
              $("#msgbox").hide();
            });

          }
        });
      }
    }
    // return false;
  });
});
