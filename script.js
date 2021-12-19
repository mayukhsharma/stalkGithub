const api='https://api.github.com/users/';

document.getElementById('btn').addEventListener('click',showGithub)

function showGithub(){

    const usernameEl=document.getElementById('github_username').value;
    const urlEl=api+usernameEl;
    fetch(urlEl).then(res=>res.json()).then(data=>{
      if(data.message)
      {
       document.getElementById('res').innerHTML=`
       <h3>Profile Not Found</h3>
       `
      }
      else{
          console.log(data);
          
          document.getElementById('res').innerHTML=`

          
          
         <img src="${data.avatar_url}" id="pic"  >
         <br>
          <p>Name: ${data.name} (${data.login})</p>
          <p>Bio: ${data.bio}</p>
          <ul>
          <li>Followers: ${data.followers}</li>
          <li>Following: ${data.following}</li>
          <li>Public Repos: ${data.public_repos}</li>
          </ul>
          <p > <a href="https://github.com/${data.login}" id="link">Link to the Github</a></p>


          `

      }

    }).catch(e=>{
        console.log(e);
    })
}

