// Init Github
const github = new Github;
// Init UI
const ui = new UI;
// Declare http call to get user
let getUserCall;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  
// Get input text
const userText = e.target.value;

  if(userText !== ''){
    ui.load();
    clearTimeout(getUserCall);
    makeCall(userText);
  }
  else {
    // Clear profile
    ui.clearProfile();
  }
});

function makeCall(userText){
  // Make HTTP call
  getUserCall = setTimeout(() =>{
    github.getUser(userText)
      .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show alert
        ui.hideLoad();
        ui.showAlert('User not found', 'alert alert-danger');
      }
      else {
        // Show profile
        ui.hideLoad();
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }, 2000);
}