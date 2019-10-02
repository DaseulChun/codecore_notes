// Javascript Single Page Application

// To be able to make cross-origin requests, what we mean by that, making HTTP/AJAX
// Requests we need allow accepting requests from different domains

// Cross-Origin requests happen in the following cases
// 1. When we try to make a request from a different domain to our API
// example a request from facebook to google two completely different domains
// 2. When we try to make a request from the same domains but, different ports
// example http:localhost:3000 to http:localhost:8080
// 3. when we try to make a request from the same domains but, different protocols
// example http:localhost:3000 to https:localhost:3000
// 4. when we try to make a request from a sub domain to a domain
// example http://developers.google.com to http://google.come

// To allow cross-origin requests in rails API, we need to configure it. Use rack-cors
// gem (https://github.com/cyu/rack-cors)

const BASE_URL = "http://localhost:3000/api/v1";

// Before making any requests you wanna make sure that your API is working
// and you have all the necessary endpoints
// all questions (http://localhost:3000/api/v1/questions)
// single question (http://localhost:3000/api/v1/questions/id)
// post question (http://localhost:3000/api/v1/questions)
// edit question (http://localhost:3000/api/v1/questions/id)

// Requests

// Create a helper module to make fetch requests to get, post, getOne, update questions
const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`, {
      credentials: "include"
    }).then(res => res.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

// This is just a helper module to sign users in
const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

Session.create({
  // This is a very bad bad bad hacky practise, DO NOT DO IT
  // instead have your credentials saved in a secret file and call it from here
  // and the password might come from user forms
  email: "hano@codecore.com",
  password: "supersecret"
});

// just a test case we don't really need to keep that in our application
if (false) {
  // get all questions
  Question.all().then(questions => console.table(questions));
  // get a single quesiton
  Question.one(31).then(res => console.log(res));
  // Create a question
  Question.create({
    title: "my Awesome Question",
    body: "This is the best question I have ever heard"
  }).then(res => console.log(res));

  // Update a Question
  let updateQuestion = {
    title: "What is your favorite pet?",
    body: "olive olive olive olive"
  };

  Question.update(215, updateQuestion);
}

// reder all questions
function renderingQuestions(questions) {
  // we will use this function to render all question to dom
  // Process to get all questions
  // we click on question link => we wanna trigger an on click event =>
  // make our ajax request to get all questions => use your javascript knowledge
  // to render all the question in our page
  const questionsContainer = document.querySelector("ul.question-list");
  questionsContainer.innerHTML = questions
    .map(q => {
      return `
            <li>
                <a class="question-link" data-id="${q.id}" href="">
                    <span>${q.id} - </span>
                    ${q.title}
                </a>
            </li>
        `;
    })
    .join("");
}

// To render a single question:
// 1. add an on click event listener to each question link (we need to catch the clicked question)
// 2. with data-id attribute that we have for each question we gonna send a get request to get the question (Question.one(:id))
// 3. we need to navigate to question show page and render it with question that we got

function renderQuestionDetails(question) {
  const questionDetailsContainer = document.querySelector("#question-show");
  const htmlString = `
        <h1>${question.title}</h1>
        <p>${question.body}</p>
        <small>Asked by: ${question.author.full_name}</small>
        <a class="link" data-target="question-edit" data-id="${question.id}" href="">Edit</a>
        <h3>Answers</h3>
        <ul>
            ${question.answers.map(a => `<li>${a.body} </li>`).join("")}
        </ul>
    `;
  questionDetailsContainer.innerHTML = htmlString;
}

// 1. ca

// refresh questions
function refreshQuestions() {
  Question.all().then(questions => renderingQuestions(questions));
}

// Get and Display a single question
function getAndDisplayQustion(id) {
  Question.one(id).then(question => {
    // create a function to render the question
    renderQuestionDetails(question);
    // navigate to question show page
    navigateTo("question-show");
  });
}

// populate form
function populateForm(id) {
  Question.one(id).then(question => {
    document.querySelector("#edit-question-form [name=title]").value = question.title;
    document.querySelector("#edit-question-form [name=body]").value = question.body;
    document.querySelector("#edit-question-form [name=id]").value = question.id;
  });
}

// Navigation
function navigateTo(sectionId, clickedLink) {
  if (sectionId === "question-index") {
    refreshQuestions();
  }

  document.querySelectorAll(".page").forEach(node => {
    node.classList.remove("active");
  });

  document.querySelector(`.page#${sectionId}`).classList.add("active");

  if (clickedLink) {
    document.querySelectorAll(".navbar a").forEach(link => {
      link.classList.remove("active");
    });

    clickedLink.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Add a click event listener to the questions container
  document.querySelector(".navbar").addEventListener("click", event => {
    const link = event.target.closest("[data-target]");

    if (link) {
      // prevent broswer default reload on click
      event.preventDefault();
      // grab the target page
      const targetPage = link.getAttribute("data-target");
      //   navigate to it
      navigateTo(targetPage, link);
    }
  });

  // refresh questions when dom content loaded
  refreshQuestions();

  // Add a click event listener to each question
  // const questionDetailsContainer = document.querySelector('#question-show');
  document.querySelector("ul.question-list").addEventListener("click", event => {
    const questionLink = event.target.closest("a.question-link");
    if (questionLink) {
      event.preventDefault();

      const { id } = questionLink.dataset;
      // now that we have id of the question we can get the question first then show it
      getAndDisplayQustion(id);
    }
  });

  // Create a Question
  // Add event listener to create question button
  const newQuestionForm = document.querySelector("#new-question-form");
  newQuestionForm.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newQuestion = {
      title: formData.get("title"),
      body: formData.get("body")
    };
    // call Question.create function that we created with newQuestion
    Question.create(newQuestion).then(question => {
      // clear form
      newQuestionForm.reset();
      // display the question that we just created
      // we already have question show functionality so we can use it here
      getAndDisplayQustion(question.id);
    });
  });

  // Pre populate and navigate to the question that we want to update
  document.querySelector("#question-show").addEventListener("click", event => {
    const link = event.target.closest("[data-target]");
    if (link) {
      event.preventDefault();
      // populate the form with question data
      populateForm(link.getAttribute("data-id"));
      // Navigate to the question that we want to update
      const targetPage = link.getAttribute("data-target");
      navigateTo(targetPage);
    }
  });

  // Update a Question
  // Add an event listener to edit question form
  const editQuestionForm = document.querySelector("#edit-question-form");
  editQuestionForm.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updatedQuestion = {
      title: formData.get("title"),
      body: formData.get("body")
    };

    Question.update(formData.get("id"), updatedQuestion).then(question => {
      // clear form
      editQuestionForm.reset();
      // get and display it
      getAndDisplayQustion(question.id);
    });
  });
});
