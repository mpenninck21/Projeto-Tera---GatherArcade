const usuario = document.getElementById("usuario");

const options = {
method: 'GET',
mode: 'cors',
cache: 'default'
}

const showData = (result) => {
    for (const campo in result){
        if(document.getElementById("usuario"+campo)){
            document.getElementById("usuario"+campo).value = result[campo];
        }
    }
}

usuario.addEventListener("blur", (e) => {
    console.log(e);
    let search = usuario.value.replace(" ", "%");
    
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=RGAPI-f38bac64-ea5f-4a62-bc10-197b1e1faa88`, options)
    .then(response => response.json())
    .then(data => {
            console.log(data)
            showData(data)
        })
        .catch(e => {
            console.log("ERRO: " +e)
        })
    })
