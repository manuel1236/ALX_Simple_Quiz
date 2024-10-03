function checkAnswer () {
    const correctAnswer = '4';

    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    let paragraph = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        paragraph.textContent = "Correct! Well done."
    } else {
        paragraph.textContent = "That's incorrect. Try again!"
    }

}

const button = document.getElementById('submit-answer');

button.addEventListener('click', checkAnswer);