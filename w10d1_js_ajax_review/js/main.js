// AJAX - Asynchronous Javascript And XML (nowadays JSON which we will end up with AJAJ)

// AJAX is a set of techniques to fetch data
// from a server asynchronously without
// interfering with the display and behavior
// of the existing page
// What that means is, our page loads while,
// in the background the 'AJAX' fetches data
// from a server and make it available for our use.

// What is JSON?
// JSON - Javascript Object Notation is the most common
// way of storing and working with data in javascript.
// It all contains two main things, which are Objects and Arrays
// which we already know about the only difference here is that
// JSON object keys need to be wrapped in double quotes
// and we access them same way we've learned

// Web browser has a buitin tool called 'XMLHttpRequest'
// and this tool will do all the heavy lifting for us with it,
// we establish a connection with the 'url' that we want to send to
// or receive from

// to use it, we need to create an instance of it
// const request = new XMLHttpRequest();
// browser expects to use 'open' method on our variable
// and then specify what we wanna do
// request.open('GET', 'http://localhost:3000/students');
// open method accepts two arguments,
// the first is to specify wether we want to send data
// or receive data 'GET, POST, PUT, PATCH, DELETE'
// and the second argument is simply just the URL

const departments = new XMLHttpRequest();
departments.open('GET', 'http://localhost:3000/departments');

departments.onload = function () {
  console.log('departments: ', departments.reponseText);
}
departments.send();

// form.sumbit(function(event){
//   const username = usernameTextField.value;
//   const email = emailField.value;
//
//   const myData = { username: username, email: email };
//
//   request('POST', 'my server url', {
//     data: JSON.stringify(myData)
//   })
// });

// next, we gonna deal with data
// request.onload = function () {
//     // console.log(request.responseText);
//
//     const resData = request.responseText;
//     // so now try to log only the first student
//     console.log('first student: ', resData[0]); // what did you get and why?
//     // You get '[' because by default the browser interpret
//     // the response as plain text so, we need to explicitly
//     // tell the browser to convert it to JSON
//     const jsonData = JSON.parse(resData);
//     console.log('first student as json: ', jsonData[0]); // now we get it as json
// };
//
// // up to here we defined our request and finally we need to send it
// request.send();


if(false){
  // this is a native browser ajax request
  function reqListener () {
    // console.log('this: ', this);
    const data = JSON.parse(this.responseText);
    console.log('result: ', data[2]);
  }
  document.querySelector('#fetch-button').addEventListener('click', ()=>    {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://localhost:3000/departments");
    oReq.send();
  });
}

if(false) {
  // doing the same thing we did above with jQuery Ajax
  document.querySelector('#fetch-button').addEventListener('click', () =>  {
    $.ajax({
      url: 'http://localhost:3000/departments',
      success: function(responseData, responseStatus, xhrAjaxRquest) {
        console.log('data: ', responseData[2]);
      }
    });
  });
}

if(false) {
  // Fetch - only available in browser
  document.querySelector('#fetch-button').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/departments');
    const myJson = await response.json();
    console.log(myJson[2]);
  });

  // Axios
  document.querySelector('#fetch-button').addEventListener('click', async () => {
    const response = await axios.get('http://localhost:3000/departments');
    console.log('data: ', response.data);
  });
}

// make an ajax request to fetch all students
const url = 'http://localhost:3000/students';
document.querySelector('#fetch-button').addEventListener('click', async () => {
  if(false) {
    // axios - then
    const response = axios.get(url);
    response.then(res => console.log('response data: ', res.data));

    // async-await
    const response2 = await fetch(url);
    const myJSON = response.json();
    console.log('data: ', myJSON);

    // jquery-ajax
    $.ajax({
      url,
      success: function(data) {
        console.log('data: ', data);
    }
  })
  }
})
