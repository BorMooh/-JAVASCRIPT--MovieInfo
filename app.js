//http://www.omdbapi.com/
//http://www.omdbapi.com/?i=tt3896198&apikey=2d217e17

/*
    METASCORE,
    ACTORS,
    DIRECTOR,
    BOX OFFICE
    IMDB_RATING
    IMDB_VOTES
*/



//Skripta čaka, da je gumb pritisnjen 
document.getElementById('form-submit').addEventListener("click", () => {
    let inputText = document.querySelector('.form-input').value;
    const api = `http://www.omdbapi.com/?t=${inputText}&apikey=2d217e17`;
    getAPI(api);

});



async function getAPI(url)
{
    const response = await fetch(url);

    let data = await response.json();
    //console.log(data);
    InsertData(data);

}

function InsertData(data)
{
    console.log(data);


    let title = document.querySelector('.data-title');
    let released = document.querySelector('.data-table-released-info');
    let genre = document.querySelector('.data-table-genre-info');
    let plot = document.querySelector('.data-table-plot-info');
    let poster = document.querySelector('.slika');


    poster.src = data.Poster;
    title.textContent = data.Title;
    released.textContent = data.Released;
    genre.textContent = data.Genre;
    plot.textContent = data.Plot;
}
