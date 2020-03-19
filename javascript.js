const quotes = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever."
  ];

  const authors = [
    "Oscar Wilde",
    "Albert Einstein",
    "Bernard M. Baruch",
    "Marcus Tullius Cicero",
    "Mae West",
    "Robert Frost",
    "Mark Twain",
    "Mahatma Gandhi"
  ];

  var text = document.querySelector("#text");
  var author = document.querySelector("#author");
  var newQuote = document.querySelector("#new-quote");
  
function getQuote() {
  var randomNum = Math.floor((Math.random() * quotes.length));
  
  var randomQuote = quotes[randomNum];
  var randomAuthor = authors[randomNum];
  
  text.textContent = randomQuote;
  author.textContent = "- " +randomAuthor;
};
  
function getImage() {
  var randomInt = Math.floor((Math.random() * 100));
  document.body.style.backgroundImage = "url('https://source.unsplash.com/random?sig="+randomInt+"')";
};

getImage();
getQuote();

newQuote.addEventListener("click", function() {
  getImage();
  getQuote();
});