const submit=(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    console.log({
        name:name,
        age:age
    })
//     rerender all your players
}

const addNewPlayer =(plyObj)=>{

}

document.getElementById("submit").addEventListener("click", submit)