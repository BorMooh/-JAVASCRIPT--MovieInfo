//http://www.omdbapi.com/
//http://www.omdbapi.com/?i=tt3896198&apikey=2d217e17



//Skripta čaka, da je gumb pritisnjen 
document.getElementById('form-submit').addEventListener("click", () => {
    console.log("Button has been clicked!");
    let inputValueLength = document.querySelector('.form-input').value.length;
    console.log(inputValueLength);

    //Ali je vnos prazen?
    if(inputValueLength === 0)
    {
        console.log("Vnos je prazen!");
        return;
    }
    let inputText = document.querySelector('.form-input').value;

    const api = `http://www.omdbapi.com/?t=${inputText}&apikey=2d217e17`;


    fetch(api).then(odgovor => { return odgovor.json();})
    .then(data => {
        console.log(data);

        
    })
});