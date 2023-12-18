document.getElementById("home").addEventListener("click", ()=>{
    location.hash="home"
})

document.getElementById("aboutweb").addEventListener("click", ()=>{
    location.hash="about0"
})

document.getElementById("aboutteach").addEventListener("click", ()=>{
    location.hash="about1"
})

document.getElementById("aboutfortnite").addEventListener("click", ()=>{
    location.hash="about2"
})

const projects = ["web", "teach", "fortnite"];

function render(){
    if(location.hash.includes("#about")){
        renderAbout()
    }else{
        renderHome()
    }
}

function renderHome(){
    document.getElementById("wrapper").innerHTML="<h1>Home Page</h1>"
}

function renderAbout(){
    const route = location.hash;
    const project = projects[route.slice(6)];
    document.getElementById("wrapper").innerHTML=`<h1>About Page</h1> <h3>${project}</h3>`
}

window.onhashchange = render;

render();