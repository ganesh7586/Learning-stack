const question = document.getElementById("que");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");

const buttons = [op1, op2, op3, op4];

let data;
let i = -1;
let answered = false;

// Fetch quiz only once
async function loadQuiz() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple");
    data = await response.json();
}

// Show Question
async function rap() {

    if (!data) {
        await loadQuiz();
    }

    i++;

    if (i >= data.results.length) {
        question.innerHTML = "🎉 Quiz Finished!";
        buttons.forEach(btn => btn.disabled = true);
        return;
    }

    answered = false;

    const q = data.results[i];

    let options = [
        q.correct_answer,
        ...q.incorrect_answers
    ];

    options.sort(() => Math.random() - 0.5);

    question.innerHTML = q.question;

    buttons.forEach((btn, index) => {
        btn.innerHTML = options[index];
        btn.dataset.correct = (options[index] === q.correct_answer);

        // Reset Style
        btn.style.backgroundColor = "antiquewhite";
        btn.style.color = "black";
    });
}

// Check Answer
buttons.forEach(button => {

    button.addEventListener("click", function () {

        if (answered) return;

        answered = true;

        if (this.dataset.correct === "true") {

            this.style.backgroundColor = "green";
            this.style.color = "white";

        } else {

            this.style.backgroundColor = "red";
            this.style.color = "white";

            // Highlight Correct Answer
            buttons.forEach(btn => {
                if (btn.dataset.correct === "true") {
                    btn.style.backgroundColor = "green";
                    btn.style.color = "white";
                }
            });

        }

    });

});