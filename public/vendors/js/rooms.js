var socket = io();

socket.on('connect', function(){
  socket.on('activeRooms', function(rooms){
    console.log('here');
    var template = $('#active-rooms').html();
    var html = Mustache.render(
    `<input type="test" list="rooms" name="room" autocomplete="off" placeholder="Pick a room">
     <datalist id="rooms">
      {{#.}}
      <option value ={{.}}>{{.}}</option>
      {{/.}}
     </datalist>`, rooms);
    
    $('#room').append(html);
  });
});