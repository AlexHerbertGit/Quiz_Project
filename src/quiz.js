//Install Node.js

// Install Readline - Later

const questions = [
    { //Index 0
        question : "What is 2 + 2?",
        options : ["2", "3", "4", "5"],
        answer : "4"
    },
    {//Index 1
        question : "What is the captial of New Zealand?",
        options : ["Auckland", "Wellington", "Nelson", "Christchurch"],
        answer : "Wellington"
    }
    //Add more questions here.
];

//Declare Quiz Function
function quiz() {
    let score = 0;

    //Iterate through questions
    questions.ForEach((q, index) => {
        console.log(`Question ${index + 1}: ${q.question}`);
    })
}