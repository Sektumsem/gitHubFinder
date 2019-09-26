loadEventListeners();

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
}