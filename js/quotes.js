const quotes = [
{
    quote: "Life is going to hit you in the head with a brick. But don't lose faith.",
    author: "Steve Jobs",
},
{
    quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
    author: "Amanda Gorman",
},
{
    quote: "I have learned not to allow rejection to move me.",
    author: "Cicely Tyson",
},
{
    quote: "Don't sit down and wait for the opportunities to come. Get up and make them.",
    author: "Madam C.J. Walker",
},
{
    quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.",
    author: "Michelle Obama",
},
{
    quote: "Always work hard and have fun in what you do because I think that's when you're more successful. You have to choose to do it.",
    author: "Simone Biles",
},
{
    quote: "All dreams are within reach. All you have to do is keep moving towards them.",
    author: "Viola Davis",
},
{
    quote: "Act as if what you do makes a difference. IT DOES.",
    author: "William James",
},
{
    quote: "Suceess is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts.",
    author: "Winston Churchill",
},
{
    quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Hellen Keller",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;