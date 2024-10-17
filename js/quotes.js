// Array of Miles Davis quotes
const quotes = [
    "Do not fear mistakes. There are none.",
    "My future starts when I wake up every morning. Every day I find something creative to do with my life.",
    "Knowledge is freedom and ignorance is slavery.",
    "It's not the notes you play; it's the notes you don't play.",
    "When you're creating your own shit, man, even the sky ain't the limit.",
    "Sometimes you have to play a long time to be able to play like yourself.",
    "Don't play what's there, play what's not there."
];


function getQuoteOfTheDay() {
    const today = new Date();
    const dayIndex = today.getDay(); // Get current day (0-6)
    return quotes[dayIndex % quotes.length]; // Cycle through the quotes
}

const quoteOfTheDay = getQuoteOfTheDay();

// Display the quote in the HTML with a line break
document.getElementById("quote").innerHTML = `"${quoteOfTheDay}"<br>- Miles Davis`;

