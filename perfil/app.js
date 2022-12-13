const usuario = document.getElementById("usuario");

const options = {
method: 'GET',
mode: 'cors',
cache: 'default'
}

usuario.addEventListener("blur", (e) => {
    console.log(e);
    let search = usuario.value.replace(" ", "%");
    
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=RGAPI-6ad1a17e-306a-486e-895a-5e409151ff6d`, options)
    .then(response => response.json())
    .then(data => {
            console.log(data)
        })
    })


