//keep quotes in an array
var quotes=["quotes 1","quotes2", "Quotes3"];
//function to generate random quotes from array element
function generate(){
 let random = Math.floor(Math.random() * quotes.
length);
 document.getElementById('quoteSection').
innerHTML=quotes[random];
}
//function to print all array elements
function seeAllQuotes(){
 text = "<ul>"; //create bullet
 for (i=0; i<quotes.length; i++){
 text += "<li>" + quotes[i] + "</li>";
 }
 text += "</ul>";
 document.getElementById("quoteSection").innerHTML =
text;
}
//add new element to array
function newQuotes(){
 var newQuotes = document.
getElementById("insertSection").value;
 alert("quotes added");
 quotes.push(newQuotes);
 seeAllQuotes();
}