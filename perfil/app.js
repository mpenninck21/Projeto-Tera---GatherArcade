alert ("Seja bem-vindo à Gather Arcade!!!")

const loluser = document.querySelector("#loluser");

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
    }
  
    loluser.addEventListener("blur", (e) => {
        let search = loluser.value.replace ("-", "");
        console.log(e);
    
        fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=RGAPI-f38bac64-ea5f-4a62-bc10-197b1e1faa88`, options)
        .then(response => response.json())
        .then(data => {
            
            document.querySelector("#lollvl").value = data.summonerLevel;
         
        })            
        
        .catch(e => {
            console.log("ERRO: "+e)
        })
    })


