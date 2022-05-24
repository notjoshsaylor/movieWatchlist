
const key = "ab685c35"
const searchBtn = document.getElementById("searchBtn")



    let searchInput = document.getElementById("search").value
    
    searchBtn.addEventListener("click", function(){
        fetch(`http://www.omdbapi.com/?apikey=${key}&s=${searchInput}`)
            .then(res => res.json())
            .then(data => console.log(data))
    })
    