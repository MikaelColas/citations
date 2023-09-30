const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById("loader")


// Montrer le loader
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true
}

//Cacher le loader
function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

    // Utiliser fetch request avec l'API de zenquote

        // let apiQuotes = [];

        //function newQuote() {
            // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; //obtenir une citation aléatoire
            // console.log(quote)
        // }

        // // Obtenir les citaitons avec l'API avec async (même quand la page n'est pas chargée)
        // async function getQuotes(){
        //     const apiUrl = 'https://zenquotes.io/api/quotes'
        //     try{
        //         const response = await fetch(apiUrl);
        //         apiQuotes = await response.json();
        //         if(!quote.author){
        //             authorText.textContent = "Auteur inconu"
        //         } else {authorText.textContent = quote.author;
        //         }
        //         if (quote.text.length > 90) {
        //             quoteText.classList.add('long-quote')
        //         } else {
        //             quoteText.classList.remove('long-quote')
        //         }
        //         quoteText.textContent = quote.text;

        //         newQuote();
        //     } catch (error) { // On attend une réponse pour générer la citation, sinon on retourne une erreur
        //         alert(error);
        //     }
        // }

        // Lorsque la page charge (Onload, par défaut, contrairement à async), on obtient les quotes
        // getQuotes();

        // autre option API avec une seule citation (pas besoin de newQuote()) : 
        //          https://zenquotes.io/api/random - Generate a random quote on each request
        //          https://zenquotes.io/api/today - Generate the quote of the day on each request



        function newQuote() {
            loading()
            //Utiliser mon fichier local
            const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
            if(!quote.author){
                authorText.textContent = "Auteur inconu"
            } else {authorText.textContent = quote.author;
            }
            if (quote.text.length > 90) {
                quoteText.classList.add('long-quote')
            } else {
                quoteText.classList.remove('long-quote')
            }
            quoteText.textContent = quote.text;
            complete();
        }

        newQuote()
        

// Bouton Tweeter
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    ;
    window.open(twitterUrl, '_blank');
}

// Bouton nouvelle citation
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


