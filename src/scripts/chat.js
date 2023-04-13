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
const comandos = ["/help", "/random", "/buscar", "/messi"];
const categorias = [ "Simulator", "Fighter","Horror" ];
const PiiSim = {
  id: 1,
  name: "PiiSim",
  desc: "Juego para mear y romper objetos",
  cat: "Simulator",
  precio: "0,55e",
  video: "<video controls width='500' poster='https://cdn.akamai.steamstatic.com/steam/apps/256743104/movie.293x165.jpg?t=1550226566'> <source src='https://cdn.akamai.steamstatic.com/steam/apps/256743104/movie480.webm?t=1550226566' type='video/webm'>",
  url:"<a href='https://store.steampowered.com/app/1002270/PiiSim/' target='_blank'>enlace steam</a>"
}
const BKF = {
  id: 2,
  name: "Brief Karate Foolish",
  desc: "Juego de peleas basado en mortal kombat con graficos realistas",
  cat: "Fighter",
  precio: "FREE",
  video: "<video controls width='500' poster='https://cdn.akamai.steamstatic.com/steam/apps/256672866/movie.293x165.jpg?t=1477068494'> <source src='https://cdn.akamai.steamstatic.com/steam/apps/256672866/movie480.webm' type='video/webm'>",
  url: "<a href='https://store.steampowered.com/app/546390/Brief_Karate_Foolish' target='_blank'> enlace steam </a>"
}
const Obama = {
  id: 3,
  name: "Obama Maze",
  desc: "Obama Maze es una experiencia de terror en 3D con el ex presidente de los Estados Unidos, Barack Obama. Debes navegar a través de sus recorridos recogiendo sus 7 'Obamiums'. Recoge los 7 para salir de su laberinto.",
  cat: "Horror",
  precio: "FREE",
  video: "<video controls width='500' poster='https://cdn.cloudflare.steamstatic.com/steam/apps/256913329/movie.293x165.jpg?t=1666911016'> <source src='https://cdn.cloudflare.steamstatic.com/steam/apps/256913329/movie480_vp9.webm?t=1666911016' type='video/webm'>",
  url:"<a href='https://store.steampowered.com/app/1808060/Obama_Maze/' target='_blank'>enlace steam</a>"
}
var juegos = [PiiSim, BKF, Obama];


function messagebot(messagebot) {
  return`<section class="bot-section"><div id=botMessage class="bot-message animation-message">${messagebot}</div></section>`;
}

function Hello(){
  const Hola = ["Hola en que puedo ayudarte?","En que le puedo servir amoooo...", "Un placer tenerlo por aquí como puedo prestarte servicio"];
  let rand = Math.floor(Math.random() * 2);
  messageChat.innerHTML += messagebot("<p>"+Hola[rand]+"</p> <p>/help --> ver comandos</p>");
  scrollToBottom();
}

// RESPUESTAS
function ComprobarMensaje(){
  if(message == comandos[0]){
    let listacomandos = ""; 
    for(let i = 0; i < comandos.length; i++){
      listacomandos += "<p>"+comandos[i]+"</p>";
      if (i == 2){
        listacomandos += "<li>-c ---> (categoria)</li> <li>-n ---> (nombre)</li>";
      }
    }
    messageChat.innerHTML += messagebot("<p>Los comandos son:</p> "+listacomandos);
  } else if (message == comandos[1]){ 
      let rand = Math.floor(Math.random() * juegos.length);
      console.log(juegos[0]);
      messageChat.innerHTML += messagebot("<div id='game"+juegos[rand].id+"'><p>"+juegos[rand].name+"</p><p>"+juegos[rand].cat+"</p><p>"+juegos[rand].desc+"</p><p>"+juegos[rand].precio+"</p><p>"+juegos[rand].video+"</p><p>"+juegos[rand].url+"</p> <a id='gamebuton' href=#>Guardar</a> ");
      document.getElementById("gamebuton").onclick = function() {SaveFile(juegos[rand].id)};

   } else if (message.includes(comandos[2])){
    Buscar();
   } else if (message.includes(comandos[3])){
    messageChat.innerHTML += messagebot("<img></img>");
  }else{
    messageChat.innerHTML += messagebot("<p> El mensaje intrducido no es valido prueba con el comando: /help</p>");
  }
}


function Buscar(){
  let result = message.search(/\/buscar/);
  if (result == 0){
    let resultc = message.search(/-c/);
    let resultn = message.search(/-n/);
    let words = message.split(" ");
    let word = "";
    word = words[2];

    if (resultc > 0 && resultn > 0){
    }else if (resultc == 8) {
      let ver = false;
      for (let i = 0; i < juegos.length; i++){
        if (word.toLowerCase().includes(juegos[i].cat.toLowerCase())){
          messageChat.innerHTML += messagebot("<p>"+juegos[i].name+"</p><p>"+juegos[i].cat+"</p><p>"+juegos[i].desc+"</p><p>"+juegos[i].precio+"</p><p>"+juegos[i].video+"</p><p>"+juegos[i].url+"</p>");
          ver = true;
        }
      }
      if (ver == false){
        messageChat.innerHTML += messagebot("<p>No se encuentra la categoria mencionada</p>");
      }
      
    }else if (resultn == 8) {
      let ver = false;
      for (let i = 0; i < juegos.length; i++){
        if (juegos[i].name.toLowerCase().includes(word.toLowerCase())){
          messageChat.innerHTML += messagebot("<p>"+juegos[i].name+"</p><p>"+juegos[i].cat+"</p><p>"+juegos[i].desc+"</p><p>"+juegos[i].precio+"</p><p>"+juegos[i].video+"</p><p>"+juegos[i].url+"</p>");
          ver = true;
        }
      }
      if (ver == false){
        messageChat.innerHTML += messagebot("<p>No se encuentra el nombre seleccionado</p>");
      }
    
    }else{
      messageChat.innerHTML += messagebot("<p>Selecciona algun parametro, ayuda en /help</p>");
    }

  }
}



function SaveFile(id){
  var userInput = document.getElementById("game"+id).value;
  require("fs").writeFile("demo.txt", userInput);
  
}
