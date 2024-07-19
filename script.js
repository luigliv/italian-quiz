 const questions = [
    { question: "Qual è il plurale di amica?", answers: ["amice", "amiche", "amici"], correct: "amiche" },
    { question: "Qual è il plurale di buona?", answers: ["buone", "buoni"], correct: "buone" },
    { question: "Qual è il plurale di intelligente?", answers: ["intelligenti", "intelligenti"], correct: "intelligenti" },
    { question: "Qual è il plurale di lenta?", answers: ["lente", "lente"], correct: "lente" },
    { question: "Qual è il plurale di sporca?", answers: ["sporche", "sporche", "sporchi"], correct: "sporche" },
];

const questionContainer = document.getElementById('question-container');
const feedbackContainer = document.getElementById('feedback-container');
const questionElement = document.getElementById('question');
const buttons = document.querySelectorAll('.answer-button');
const feedbackElement = document.getElementById('feedback');
const continueButton = document.getElementById('continue-button');
const exitButton = document.getElementById('exit-button');

let currentQuestionIndex = 0;
let score = 0;
let startTime;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startTime = new Date();
    shuffleQuestions();
    showQuestion();
}

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    buttons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.onclick = () => selectAnswer(button.textContent);
        button.style.display = 'inline-block'; // Assicura che i pulsanti siano visibili
    });
}

function resetState() {
    questionContainer.style.display = 'block';
    feedbackContainer.style.display = 'none';
    continueButton.style.display = 'none';
    exitButton.style.display = 'none';
}

function selectAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        feedbackElement.textContent = 'Corretto!';
        score++;
    } else {
        feedbackElement.textContent = `Sbagliato! La risposta corretta era: ${currentQuestion.correct}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < 5 && currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function continueQuiz() {
    if (currentQuestionIndex < 5 && currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function exitQuiz() {
    questionContainer.style.display = 'none';
    feedbackContainer.style.display = 'none';
    const totalTime = Math.round((new Date() - startTime) / 1000);
    alert(`Hai risposto a ${score} domande corrette in ${totalTime} secondi. Grazie per aver giocato!`);
    window.location.reload();
}

function endQuiz() {
    questionContainer.style.display = 'none';
    feedbackContainer.style.display = 'block';
    const totalTime = Math.round((new Date() - startTime) / 1000);
    feedbackElement.textContent = `Hai risposto a ${score} domande corrette in ${totalTime} secondi. Vuoi giocare ancora?`;
    continueButton.style.display = 'inline-block';
    exitButton.style.display = 'inline-block';
}

continueButton.addEventListener('click', continueQuiz);
exitButton.addEventListener('click', exitQuiz);

startQuiz();
