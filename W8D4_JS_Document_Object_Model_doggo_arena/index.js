// document is the root DOM node it contains all the other nodes of the web page
console.log(document)

// Selecting
// HTMLELement.querySelector() 
// takes in a css selector string and returns the 
// very first DOM node that matches this string;
document.querySelector('div');

document.querySelector('#toxic-tim'); //returns the HTMLElement that has id of toxic-tim

// HTMLElement is the DOM object that gets returned from these selectors.
// They contain the methods like `querySelector`

// querySelectorAll is kind of like querySelector but instead of returning just the first
// node that matches, it will return all the nodes that match.
document.querySelectorAll('div');
// the value that gets is a NodeList which is kind of like an array of nodes'

// getElementById
document.getElementById('toxic-tim')
// returns the DOM node that has id of given string

document.getElementsByClassName('doggos');
// returns the DOM nodes that has the class of given string
// It doesn't return a NodeList like querySelectorAll. Instead it returns an HTMLCollection

// Exercises
// 1

document.getElementById('moneybags-michael')
document.querySelectorAll('#larry-the-lion')

// document.querySelector('.team.teal').querySelectorAll('.doggos')
const teamTeal = document.querySelector('.team.teal'); //returns a HTMLElement Node
const teamTealDoggos = teamTeal.querySelectorAll('.doggo');

// without the first doggo
// const justLastTwo = [teamTealDoggo[1], teamTealDoggo[2]];

// Navigating Nodes

const inBreadDog = document.querySelector('#inbread-dog');

// getting siblings
// HTMLElement.nextElementSibling
// HTMLELement.previousElementSibling

// getting parent
// HTMLElement.parentElement
inBreadDog.parentElement

// HTMLElement.children
inBreadDog.children // returns an array like object containing all the children of the node

// matches
// used to check if a HTMLElement matches a particular css selector
inBreadDog.matches('#inbread-dog'); // true
inBreadDog.matches('h1'); //false

// Iterating Over NodeList or HTMLCollection
// NodeList returned by querySelectorAll have the .forEach method
// HTMLCollection returned by getElementsByClassname does not have a .forEach method
teamTealDoggos.forEach((doggo) => {
  console.log(doggo);
})

// for of loop
for (let doggo of teamTealDoggos) {
  console.log(doggo);
}

// style property
// all HTMLELements have a style property used to get or set inline styles
inBreadDog.style.color = 'red'; //change text to red

// if we want to get all the styles of a node even ones that were from a stylesheet we use
// getComputedStyle(<node>)
getComputedStyle(inBreadDog); // returns ALL styles (not just inline)

// Add a border to all of the doggos

const allDoggos = document.querySelectorAll('.doggo');
allDoggos.forEach(doggo => {
  doggo.style.border = '5px solid limegreen';
});

// innerHTML is used to get and set the nested html of HTMLElement being operated on
inBreadDog.innerHTML // returns whatever is the innerHTML of the node.
inBreadDog.innerHTML = "<h5>new name</h5>"// changes innerHTML

// outerHTML similar to innerHTML but includes the html of the HTMLElement node being operatoed on
inBreadDog.outerHTML; 

// manipulating ids and classes
// All HTMLElements have a `id` property used to set and get it's ids
inBreadDog.id; // returns 'inbread-dog';

// All HTMLELements have a `className` property used to set and get it's ids
inBreadDog.className; // returns 'doggo fighter';

// classList is a property that abstracts manipulating classes of a HTMLElement
inBreadDog.classList.remove('doggo') //removes doggo class
inBreadDog.classList.add('doggo') // add dogo class

// add or remove classes and ids to trigger effects
// in index.css we've added a css selector for the class hidden
// .hidden {
//   display: none;
// }
// we add this class to any node we want hidden.

// inBreadDog.classList.add('hidden') // will now "hide" the HTMLElement

// Getting and Setting Attributes

// getAttribute used to get the value of a HTMLElement's attribute
inBreadDog.getAttribute('id') // returns 'inbread-dog'

// setAttribute used to set a attribute
// inBreadDog.setAttribute('id', 'no_id')
// inBreadDog.getAttribute('id') // returns 'no_id'

inBreadDog.setAttribute('data-bones', 6); // setting a custom data attribute
inBreadDog.dataset // returns all an object that contains the attributes that start with 'data-'

// removing nodes

// HTMLElement.remove(); is used to delete a HTML element from the DOM
inBreadDog.remove(); // gone

// EXERCISES
// 1
const allTeams = document.querySelectorAll('.team');

for (let team of allTeams) {
  team.style.backgroundColor = 'fuchsia';
}

// 2 rename all doggos

const allDoggos2 = document.querySelectorAll('.doggo');

allDoggos2.forEach(dog => {
  dog.innerText = 'rob the slob'
})

// Creating

// HTMLElement.createElement is used to create a new HTMLElement node
const drillBitDarrel = document.createElement('div');
drillBitDarrel.id = 'drill-bit-darrel';
drillBitDarrel.className = 'doggo fighter';
drillBitDarrel.style.backgroundImage = 'url(images/drill_bit_darel.jpg)'

// appendChild will add a HTMLElement to the last child of a existing HTMLElement
const teamTealRoster = document.querySelector('.team.teal').querySelector('.roster');
// teamTealRoster.appendChild(drillBitDarrel);

const lastChildOfTeamTeal = teamTealRoster.children[1];

// insertBefore
teamTealRoster.insertBefore(drillBitDarrel, lastChildOfTeamTeal);

// EXERCISE create another challenger for team salmon
const teamSalmonRoster = document.querySelector('.team.salmon').querySelector('.roster');

const archmageAlfie = document.createElement('div');
archmageAlfie.id = 'archmage-alfie';
archmageAlfie.className = 'doggo fighter';
archmageAlfie.style.backgroundImage = 'url(images/archmage_alfie.jpg)'
archmageAlfie.style.border = '5px solid limegreen';

teamSalmonRoster.appendChild(archmageAlfie);


