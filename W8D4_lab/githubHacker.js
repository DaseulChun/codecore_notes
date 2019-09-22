// #1 
// Change the text color of all file name and directory name links to red
document.querySelectorAll('.js-navigation-open').forEach(ele => {
  ele.style.color = 'red';})

// #2
// Delete all file and directory icons from the file explorer (the big box below the Clone or download button).
const tBody = document.querySelector('tbody')
ourIcons = tBody.querySelectorAll('.icon')
ourIcons.forEach(i => {i.remove()})

// #3
// Clone the johnny five logo (the big yellow square with a robot inside) and use it to replace the Github logo at the very top left of the page. Also, resize the cloned johnny five logo to be about the same size as the replaced Github logo.

// Github logo size
// width="32" height="32"

// johnny five logo
{/* <img src ="https://github.com/rwaldron/johnny-five/raw/master/assets/sgier-johnny-five.png"> */}

// removing the gitLogo
const gitLogo = document.querySelector('.Header-link').childNodes[1]
gitLogo.remove();

// creating new element for newLogo
const newLogo = document.createElement('img');
newLogo.src = "https://github.com/rwaldron/johnny-five/raw/master/assets/sgier-johnny-five.png";
newLogo.width = 32;
newLogo.height = 32;

// append it to the right posision
const headerLink = document.querySelector('.Header-link');
headerLink.appendChild(newLogo);

// #4
// Replace all topic tags (e.g. javascript, arduino, chip. etc) with the first tags, javascript
document.querySelectorAll('.topic-tag-link').forEach(ele => {
  ele.innerText = "javascript"})
