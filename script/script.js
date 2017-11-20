
const API_KEY = "https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=9e5295ea19094f358c46720032df524e"

const container = document.querySelector(".container")
// const = document.querySelector("")
// const = document.querySelector("")
// const = document.querySelector("")


$.ajax({
    type: "GET",
    url: API_KEY,
    async: true,
    success: function(info){
        console.log(info);
        for(let i in info.articles){
            
            container.innerHTML += `
            <div class="output"><p>${info.articles[i].title}</p></div>
            `
        }
    }
}
)





    