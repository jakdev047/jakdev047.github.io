// selecting
let messageInput = document.querySelector('.message-input');
const messageUl = document.querySelector('.check-reply');
const formBtn = document.querySelector('.formSubmit');

// event

formBtn.addEventListener('click',function(e){
  e.preventDefault();
  
  let msgContent = messageInput.value;

  const textMsg = `<li class="checklist-message-body-me">
                    <p>${msgContent}</p>
                  </li>`;

  messageUl.innerHTML += textMsg;

  messageInput.value = '';
})

