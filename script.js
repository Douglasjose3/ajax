document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const bioElement = document.querySelector('#bio');
    const repositoryElement = document.querySelector('#repository');
    const folllowersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Douglasjose3')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            bioElement.innerText = json.bio;
            repositoryElement.innerText = json.repos_url;
            folllowersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            repositoryElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})