const btnEl = document.getElementById("btn");

const quoteChange =document.getElementById("quote");

const quoteAuthor =document.getElementById("author");

const apiURL ="https://api.quotable.io/random";


async function getQuote(){

    try {

        const response =await fetch(apiURL);
        const data =await response.json();
        const dataContent = data.content;
        const dataAuthor =data.author;
        quoteChange.innerText = dataContent;
        quoteAuthor.innerText="~" + dataAuthor;
        console.log(data);
        
    } catch (error) {

        console.log(error);
        quoteChange.innerText="An error happened, please try later";
        quoteAuthor.innerText="An error happened";
        
    }

}


btnEl.addEventListener("click", getQuote);