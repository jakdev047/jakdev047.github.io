// selecting
let messageInput = document.querySelector('.message-input');
const messageUl = document.querySelector('.check-reply');
const formBtn = document.querySelector('.formSubmit');
let div = document.querySelector(".checklist-message-body");

// event

formBtn.addEventListener('click',function(e){
  e.preventDefault();
  
  if(messageInput.value === '') {
    alert('Please Type Something else...')
  }
  else {
    let msgContent = messageInput.value;

    const textMsg = `<li class="checklist-message-body-me">
                      <p>${msgContent}</p>
                    </li>`;

    messageUl.innerHTML += textMsg;

    messageInput.value = '';

    scrolltoBottom(div)
  }
})

function scrolltoBottom(div){
    div.scrollTop = div.scrollHeight - div.clientHeight;
}


