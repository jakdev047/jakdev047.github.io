let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');

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
                    console.log(data);
                    if( data.message == 'Not Found') {
                        // show alert
                    }
                    else {
                        // show profile

                    }
                })
        }
        catch {err => console.log(err.message)}
    }
    else {
        // clear profile
    }
}