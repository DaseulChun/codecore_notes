// Change the title of the article to your name
document.querySelector('#firstHeading').innerHTML = 'Daseul';

// Hide the body of the article
document.querySelector('#bodyContent').style.display = 'none';

// Replace the Wikipedia logo with another picture
const logo = document.getElementsByClassName('mw-wiki-logo')[0];
logo.style.backgroundImage =
'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NmCOz0b-1rPuLxNEP2Nxba-5EgjQrQ5fXMT5Nod4DzbPeCyjNg)'

// Replace the word "pug" in every p tag with "spud".
let paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
    const pText = p.innerText;
    const newText = pText
        .split(' ')
        .map(word => {
            if (word === 'pug') {
                return 'spud';
            } else {
                return word;
            }
        })
        .join(' ');
    p.innerText = newText;
}