const usersDiv=document.querySelector("#users")
window.addEventListener("load",fetchLink)

const url = "https://jsonplaceholder.typicode.com/users";

function fetchLink(url) {
    fetch(url) 
        .then (res=>res.json());
        .then (json=>{
            let output= "";
            for(let user of json) {
                output += `
                <div class="user">
                    <ul>
                        <li> ID: ${user.id}</li>
                        <li> Name:${user.name}</li>
                        <li> Email:${user.email}</li>
                        <li> Address:${user.address.city}</li>
                        <li> Phone:${user.phone}</li>
                        <li> Website:${user.website}</li>

                    </ul>
                </div>    
                `;
            }

            usersDiv.innerHTML=output;  
        })
        
        
        .catch((err) => console.log(err));
    

    
   
};

fetchLink(url);
