// ------ [Lab] Selecting Doggos -------------------
// Clicking a .doggo.fighter adds the selected class to it. A doggo with the selected class is considered selected.





// // [Lab] Recruiting New Fighters
// // Update the applicant preview's h1 node contents with the applicant name as it is typed.
// const blankName = document.querySelector('.doggo.blank > h1');
// const applicantNameInput = document.getElementById("name");
// applicantNameInput.addEventListener('change', function(event) {
//   const name = event.currentTarget.value;
//   blankName.innerHTML = `${name}`;
// });

// // Update the applicant preview's picture once a valid picture url as it is typed. Check that the typed in field ends with .jpg, .gif or .png.
// const blankDoggo = document.querySelector('.doggo.blank');
// const pictureUrlInput = document.getElementById('picture-url');

// pictureUrlInput.addEventListener('change', function(event) {
//   const url = event.currentTarget.value;

//   // check that the typed in field ends with .jpg .gif or .png
 
//   if (preg_match('~\.(png|gif|jpeg)', url)) {
//     blankDoggo.style.backgroundImage = `url(${url})`;
//   }
// });

// // Give a salmon or teal border to the applicant preview depending on which team is typed.

// // 1. the applicant preview
// const blankDoggo = document.querySelector('.doggo.blank');
// // 2. the target, we want to put eventListener on it 
// const teamNameInput = document.getElementById('team-name');
// // 3. put event listener on the target
// teamNameInput.addEventListener('change', function(event) {
//   const teamName = event.currentTarget.value;
//   if (teamName.toLowerCase === 'salmon') {

//   } elseif (teamName.toLowerCase === 'teal') {

//   } else {

//   }
// })

// // When the form is submitted, reset the applicant preview and create that .doggo.fighter in the team written in the team name field.




// // [Lab] User Friendly Shortcuts
// // Holding ctrl and pressing a number selects the .doggo.fighter at that index. .team.salmon doggo's should be first. 
// const doggos = document.querySelectorAll('.doggo.fighter');

// document.addEventListener('keydown', (event) => {
//   const key = event.key;
//   const ctrlKey = event.ctrlKey;
//   const altKey = event.altKey;

//   console.log(key);
//   // if (key == index && altKey && ctrlKey) {
//   //   doggos[key].style.border = "5px solid blue";
//   // }

//   if (key == 0 && altKey && ctrlKey) {
    
//     doggos[0].style.border = "5px solid blue";
//   }
// })

// // This should work even if new .doggo.fighters are added to the team (e.g. Pressing ctrl-0 selects #toxic-tim, pressing ctrl-4 selects #larry-the-lion, etc)

// // backspace removes a selected .doggo.fighter from the DOM.

