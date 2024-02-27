
// XMLHttpRequest---> xhr request or we can say AJAX request
let ajaxRequest = new XMLHttpRequest();// creates one object to interact with server
ajaxRequest.open("GET", "https://api.github.com/users"); 


ajaxRequest.onload = function(info){ /* onload is an Event which takes one function  */
    let res = JSON.parse(ajaxRequest.response); // traditonal way to fetch data from server 
    let output = "";

    for(let user of res){
        output += `
        <img src = "${user.avatar_url}" />
         
        
        `;
    }
    document.getElementById("example").innerHTML = output;
}
ajaxRequest.send();//  sending request to server

