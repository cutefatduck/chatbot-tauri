let guestChat = document.getElementById("guestChat");

guestChat.addEventListener("submit", (e) => {
  e.preventDefault();

  let guest = document.getElementById("prompt");

  let message = guest.value;
  
  const messageChat = document.getElementById("messages-chat");

  let element = document.getElementById("guestMessage");
  if(element != null){
    console.log(1);
    element.classList.remove("animation-message");
    element.removeAttribute('id')
  }
  messageChat.innerHTML += `<section class"message"><div id=guestMessage class="guest-message animation-message"><p>${message}</p></div></section>`;
  document.getElementById("guestChat").reset();
  scrollToBottom();
});

function scrollToBottom() {
  let someElement = document.getElementById("messages-chat")
  someElement.scrollTop = someElement.scrollHeight;
}



