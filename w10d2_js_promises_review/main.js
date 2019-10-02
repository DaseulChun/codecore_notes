// JS Promises

const promiseToDoHomework = new Promise(function(resolve, reject) {
  // 1. first part is to do what you are supposed to do
  // which a promise
  // Doing homework
  let doneHomework = true;

  if (doneHomework) {
    resolve("Done the homework");
  } else {
    reject("Could not do the homework");
  }
});

// The reason we are chaining then when we use a promise is because promises
// need time to resolve, we can use then, asyn-await, try-catch to deal with
// promises

// promiseToDoHomework.then(result => console.log(result));

const wakeup = function() {
  return new Promise(function(resolve, reject) {
    // resolve("Woke up early");
    setTimeout(function() {
      resolve("Wake up  early");
    }, 1000);
  });
};

const takeAshower = function() {
  return new Promise(function(resolve, reject) {
    resolve("Took a shower");
  });
};

const goToSchool = function() {
  return new Promise(function(resolve, reject) {
    resolve("Went to School");
  });
};

// then
// wakeup()
//   .then(function(result) {
//     console.log(result);
//     return takeAshower(result);
//   })
//   .then(function(result) {
//     console.log(result);
//     return goToSchool(result);
//   })
//   .then(function(result) {
//     console.log("Finished: ", result);
//   });

// Promise.all
Promise.all([wakeup(), takeAshower(), goToSchool()]).then(result => console.log(result));

// prmise.race
// Promise.race([wakeup(), takeAshower(), goToSchool()]).then(result => console.log(result));

// try - catch

function tryCatch() {
  if (false) {
    console.log("try");
    return "try";
  } else {
    throw new Error("thrown error code 13");
  }
}

// try - catch, everytime try will be tried first if we get any kind of error
// catch block will be implemented
try {
  tryCatch();
} catch (err) {
  console.log("My Custom error is: ", err);
}
