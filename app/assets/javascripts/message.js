$(function(){
    function buildHTML(message){
    var img = ``;
    message.image == null
      ? img = ``
      : img = `<img src="${message.image}">`;
    var html = `
                <div class="message" data-message-id="${message.message_id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                    ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <div class="lower-message__content">
                    ${message.content}
                    </div>
                    <div class="lower-message__image">
                    ${img}
                    </div>
                  </div>
                </div>
                `
    return html;
  }
  setInterval(function(){
    var message_id = $('.message:last').data('message-id');
    console.log(message_id)
    $.ajax({
      url: location.href,
      dataType: 'json',
      data: {
        message: {id: message_id }
      }
    })
    .done(function(json){
      var insertHTML = ''
      if (json.length !== 0){
        json.forEach(function(message){
        insertHTML += buildHTML(message);
      });
      $('.messages').append(insertHTML);
    }
    })
    .fail(function(data){
      alert('自動更新に失敗しました');
    });
  },10000);



  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  })
});
