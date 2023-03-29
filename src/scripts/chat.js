let guestChat = document.getElementById("guestChat");
var message ="";
const messageChat = document.getElementById("messages-chat");
Hello();
guestChat.addEventListener("submit", (e) => {
  e.preventDefault();

  let guest = document.getElementById("prompt");

  message = guest.value;

  let elementguest = document.getElementById("guestMessage");
  let elementgbot = document.getElementById("botMessage");
  if(elementguest != null){
    elementguest.classList.remove("animation-message");
    elementguest.removeAttribute('id')
  }
  if(elementgbot != null){
    elementgbot.classList.remove("animation-message");
    elementgbot.removeAttribute('id')
  }
  messageChat.innerHTML += `<section class="guest-section"><div id=guestMessage class="guest-message animation-message"><p>${message}</p></div></section>`;
  document.getElementById("guestChat").reset();
  ComprobarMensaje();
  scrollToBottom();
});

function scrollToBottom() {
  let someElement = document.getElementById("messages-chat")
  someElement.scrollTop = someElement.scrollHeight;
}


///CHAT BOT RESPUESTAS
const comandos = ["?help", "?juegorandom", "?buscar", "?guardar"];
function messagebot(messagebot) {
  return`<section class="bot-section"><div id=botMessage class="bot-message animation-message">${messagebot}</div></section>`;
}

function Hello(){
  const Hola = ["Hola en que puedo ayudarte?","En que le puedo servir amoooo...", "Un placer tenerlo por aquí como puedo prestarte servicio"];
  let rand = Math.floor(Math.random() * 2);
  messageChat.innerHTML += messagebot("<p>"+Hola[rand]+"</p> <p>?help --> ver comandos</p>");
  scrollToBottom();
}


// RESPUESTAS
function ComprobarMensaje(){
  if(message == "?help"){
    let listacomandos = ""; 
    for(let i = 0; i < comandos.length; i++){
      listacomandos += "<p>"+comandos[i]+"</p>";
    }
    messageChat.innerHTML += messagebot("<p>Los comandos son:</p> "+listacomandos);
  }else{
    messageChat.innerHTML += messagebot("<p> El mensaje intrducido no es valido prueba con el comando: ?help</p>");
  }
}
