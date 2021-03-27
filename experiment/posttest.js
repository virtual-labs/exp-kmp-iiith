/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1.What is the overall complexity of the KMP-String-Searching algorithm?", ///// Write the question inside double quotes
answers: {
a: "O(N×M)O(N \times M)", ///// Write the option 1 inside double quotes
b: "O(N<sup>2</sup>)O(N^2)", ///// Write the option 2 inside double quotes
c: "O(N+M)O(N+M) ", ///// Write the option 3 inside double quotes
d: "None of the above ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c" ///// Write the correct option inside double quotes
},

{
question: "2. What is the space complexity for the KMP String Searching algorithm?",  ///// Write the question inside double quotes
answers: {
a: "O(M)O(M)",                  ///// Write the option 1 inside double quotes
b: "O(N)O(N)",                  ///// Write the option 2 inside double quotes
c: "O(N+M)O(N+M)", ///// Write the option 3 inside double quotes
d: "None of the above", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "3. What is the LPS array for the pattern: 'ababbabbabbababbabb' ?",  ///// Write the question inside double quotes
answers: {
a: " 001201201001232101",                  ///// Write the option 1 inside double quotes
b: "0012012012012345678",                  ///// Write the option 2 inside double quotes
c: "012344567891230120", ///// Write the option 3 inside double quotes
d: " 012344567891230123", ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},

{
question: "4. Find the LPS array for 'AABAAABAA'?",  ///// Write the question inside double quotes
answers: {
a: "010122345",                  ///// Write the option 1 inside double quotes
b: "010000123 ",                  ///// Write the option 2 inside double quotes
c: "012345678", ///// Write the option 3 inside double quotes
d: "010010010", ///// Write the option 4 inside double quotes

},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "5. Using the LPS array from the previous question, which character would you start comparing from if you know that the matching failed at AABAAABAA? ",  ///// Write the question inside double quotes
answers: {
a: "0",                  ///// Write the option 1 inside double quotes
b: "1",                  ///// Write the option 2 inside double quotes
c: "6 ", ///// Write the option 3 inside double quotes
d: "3", ///// Write the option 4 inside double quotes

},
correctAnswer: "d"                ///// Write the correct option inside double quotes
},

];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
