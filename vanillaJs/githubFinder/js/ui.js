class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src=${user.avatar_url} alt=${user.login} class="img-fluid mb-3"/>
                        <a href=${user.html_url} target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-seconday">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.follwers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br/> <br/>
                        <ul className="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
}