$( document ).ready(function() {
  
  
   /*global io*/
  var socket = io();
      
//   socket.on('user ', function(data){
//     console.log(data);
    
//   });
//   socket.on('user', data => {
//     console.log(data);
    
//   });
  
  socket.on('user', function(data){
    $('#num-users').text(data.currentUsers+' users online');
    var message = data.name;
    if(data.connected) {
      message += ' has joined the chat.';
    } else {
      message += ' has left the chat.';
    }
    $('#messages').append($('<li>').html('<b>'+ message +'<\/b>'));
  });
  
  // socket.on('user disconnect', function(data){
  //   console.log('A user has disconnected. Now there are '+data+' user(s).');
  // });
  
  socket.on('new message', function(data){
    $('#messages').append($('<li>').html('<b>'+ data.name +' : '+data.message +'<\/b>'));
  });
  
  // Form submittion with new message in field with id 'm'
  $('form').submit(function(){
    var messageToSend = $('#m').val();
    //send message to server here?
    socket.emit('chat message', messageToSend);
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
  
  
  
});
