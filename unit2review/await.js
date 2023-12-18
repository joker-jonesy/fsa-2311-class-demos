async function grabAllMovies(){
    const response =  await fetch("https://swapi.dev/api/films");
    const data =  await response.json();
    return data.results;
}


async function render(){
    const movies = await grabAllMovies();

    document.body.innerHTML="";

    // forEach the movies

    movies.forEach((itm)=>{
        const ele = document.createElement("div");
        ele.innerHTML=itm.title
        document.body.appendChild(ele)
    })

}

await render();