// script.js
const questionDiv = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next');
const timerDiv = document.getElementById('timer');

let timerInterval = null;
let timerStart = null;


let currentQuestion = {};
let missedQuestionsQueue = [];
let questionsUntilNextMissed = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let isFirstQuestion = true;
function generateQuestion() {
    // Timer logic
    if (timerInterval) clearInterval(timerInterval);
    timerStart = Date.now();
    timerDiv.textContent = 'Time: 0s';
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - timerStart) / 1000);
        timerDiv.textContent = `Time: ${elapsed}s`;
    }, 1000);
    if (isFirstQuestion) {
        currentQuestion = { a: 6, b: 7, answer: 42 };
        isFirstQuestion = false;
    } else if (questionsUntilNextMissed.length > 0 && questionsUntilNextMissed[0] === 0 && missedQuestionsQueue.length > 0) {
        const missed = missedQuestionsQueue.shift();
        currentQuestion = { ...missed };
        questionsUntilNextMissed.shift();
    } else {
        // Decrement all counters
        questionsUntilNextMissed = questionsUntilNextMissed.map(x => x - 1);
        // Remove any that are now negative
        questionsUntilNextMissed = questionsUntilNextMissed.filter(x => x >= 0);
        // Generate a new random question
        const a = getRandomInt(1, 12);
        const b = getRandomInt(1, 12);
        currentQuestion = { a, b, answer: a * b };
    }
    questionDiv.textContent = `What is ${currentQuestion.a} × ${currentQuestion.b}?`;
    answerInput.value = '';
    feedbackDiv.textContent = '';
    answerInput.disabled = false;
    submitBtn.disabled = false;
    nextBtn.style.display = 'none';
    // Set color group on quiz-container
    const container = document.getElementById('quiz-container');
    // Remove all group classes
    container.className = container.className
        .split(' ')
        .filter(c => !/^group-\d+$/.test(c))
        .join(' ');
    container.classList.add(`group-${currentQuestion.a}`);
    answerInput.focus();
}

submitBtn.addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    const userAnswer = parseInt(answerInput.value, 10);
    if (isNaN(userAnswer)) {
        feedbackDiv.textContent = 'Please enter a number.';
        return;
    }
    if (userAnswer === currentQuestion.answer) {
        feedbackDiv.textContent = '✅ Correct!';
        feedbackDiv.style.color = 'green';
        if (typeof correct_answer === 'function') {
            correct_answer();
            if (currentQuestion.a === 6 && currentQuestion.b === 7) {
                if (typeof playSixSevenSound === 'function') {
                    playSixSevenSound();
                }
            } else {
                playCorrectSound();
            }
        }
    } else {
        // Show full equation and nearest equations
        const a = currentQuestion.a;
        const b = currentQuestion.b;
        let feedback = `❌ Incorrect. The answer is <strong>${a} × ${b} = ${a * b}</strong>.<br>`;
        // Nearest equations: b-1 and b+1 (within 1-12)
        let neighbors = [];
        if (b - 1 >= 1) neighbors.push(`${a} × ${b - 1} = ${a * (b - 1)}`);
        if (b + 1 <= 12) neighbors.push(`${a} × ${b + 1} = ${a * (b + 1)}`);
        if (neighbors.length > 0) {
            feedback += 'Nearby: ' + neighbors.join(', ');
        }
        feedbackDiv.innerHTML = feedback;
        feedbackDiv.style.color = 'red';
        if (typeof playErrorSound === 'function') {
            playErrorSound();
        }
        // Schedule this question to reappear within the next 10 questions
        if (!missedQuestionsQueue.some(q => q.a === currentQuestion.a && q.b === currentQuestion.b)) {
            missedQuestionsQueue.push({ ...currentQuestion });
            const slot = getRandomInt(1, 10);
            questionsUntilNextMissed.push(slot);
        }
    }
    answerInput.disabled = true;
    submitBtn.disabled = true;
    nextBtn.style.display = 'inline-block';
});

nextBtn.addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    generateQuestion();
});


answerInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});

// Allow space bar to trigger next question
document.addEventListener('keydown', function(event) {
    // Only trigger if Next button is visible and enabled
    if (event.code === 'Space' && nextBtn.style.display !== 'none' && !nextBtn.disabled) {
        event.preventDefault();
        nextBtn.click();
    }
});

generateQuestion();
