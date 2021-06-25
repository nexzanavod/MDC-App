const chartForm = document.getElementById('chat-form');


const socket = io();



//Message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);
});

//Message submit 
chartForm.addEventListener('submit', (e) => {
  e.preventDefault();


  //Get message text
  const msg = e.target.elements.msg.value;


  //Emit message to server
  socket.emit('chatMessage', msg);

});



//Output message to Dom
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = message;
  document.querySelector('.chat-messages').appendChild(div);
}