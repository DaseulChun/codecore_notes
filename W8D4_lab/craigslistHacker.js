// Get the href attribute of the first link on the page.
const firstLink = document.querySelector('a');
firstLink.getAttribute('href');
// "/"

// Get the number of links on this page.
document.querySelectorAll('a').length
// 436

// Change the text for all links to be your name.
const links = document.querySelectorAll('a')
for (let link of links) {
  link.innerHTML = 'daseul';}
links.forEach(link => {link.innerHTML = 'daseul'});

// Make Craigslist's logo link to http://www.google.com
document.querySelector('#logo').children[0].setAttribute('href', 'http://www.google.com');

// Make of all the text use the Papyrus font.
document.body.style.fontFamily = 'Papyrus';

// Make the event calendar alternate the background colour of each day square like a chess board.

document.querySelectorAll("td").forEach((td, index) => {
  td.style.background = index % 2 == 0 ? "white" : "black"
});

// Remove all p and a nodes that contain the substring "es"
document.querySelectorAll("a, p").forEach(ele => {
  ele.innerText.includes("es") ? ele.parentNode.remove(ele) : ""
})