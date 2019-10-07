const gitHub=new GitHub;
const ui=new  UI;

const searchUser=document.getElementById('searchUser');

searchUser.addEventListener('keyup',(event)=>{
    const userText=event.target.value;
    if(userText!==''){
        gitHub.getUser(userText)
        .then(data=>{
            if(data.profile.message==='Not Found'){
                ui.showAlter('User Not Found', 'alert alert-danger');
            }
            else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            console.log(data);
        })
    }
    else{
        ui.clearProfile();
    }
    
});




/*loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getObject);
}
function getObject(){
    const gitHub=new GitHub;
    console.log(gitHub);

    gitHub.getUser('Sektumsem')
    .then(data=>{
        console.log(data);
    });
}*/