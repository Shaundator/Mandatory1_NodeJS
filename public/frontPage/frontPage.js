const frontPageLink = "http://127.0.0.1:5500/public/frontPage/frontPage.html"
const notePageLink = "http://127.0.0.1:5500/public/notePage/notePage.html"

function login(username, password){
    console.log('logging in:');
    console.log('username: ' + username);
    console.log('password: ' + password);
    localStorage.setItem('current-username', username)
    goToNoteMenu()
}

function goToNoteMenu(){
    window.location.href = notePageLink;
}