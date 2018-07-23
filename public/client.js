$( document ).ready(function() {
  
  
   /*global io*/
  var socket = io();
      
  socket.on('user count', function(data){
    console.log(data);
    
  });
  socket.on('user disconnect', function(data){
    console.log('A user has disconnected. Now there are '+data+' user(s).');
  });
  
  // Form submittion with new message in field with id 'm'
  $('form').submit(function(){
    var messageToSend = $('#m').val();
    //send message to server here?
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
  
  
  
});
