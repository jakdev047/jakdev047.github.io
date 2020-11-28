let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');

let ui = new UI();

// event listener
searchBtn.addEventListener('click', userSearch);

function userSearch(e) {
    e.preventDefault();

    let userText = searchUser.value;
    if (userText != '') {
        try {
            fetch(`https://api.github.com/users/${userText}`)
                .then(res => res.json())
                .then(data => {
                    if( data.message == 'Not Found') {
                        // show alert
                       setTimeout(()=>{
                        ui.showAlert("User Not Found!","alert alert-danger")
                       },1000)
                    }
                    else {
                        // show profile
                        ui.showProfile(data);
                    }
                })
        }
        catch {err => console.log(err.message)}
    }
    else {
        // clear profile
        ui.clearProfile();
    }
}