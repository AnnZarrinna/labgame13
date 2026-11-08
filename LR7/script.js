// Підключаємо сучасний Google Font (Quicksand) для м'якого та стильного вигляду
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap';
document.head.appendChild(fontLink);

const style = document.createElement('style');
style.innerHTML = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background: linear-gradient(135deg, #fff0f5 0%, #ffc0cb 50%, #ffe4e1 100%);
        font-family: 'Quicksand', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
    }
    .card {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
        border: 2px solid rgba(255, 182, 193, 0.6);
        box-shadow: 0 20px 40px rgba(255, 105, 180, 0.25), inset 0 0 15px rgba(255, 255, 255, 0.8);
        border-radius: 30px;
        padding: 35px 30px;
        width: 100%;
        max-width: 440px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        position: relative;
        animation: fadeIn 0.6s ease-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .back-link {
        align-self: flex-start;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        color: #d81b60;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .back-link:hover {
        color: #ff1493;
        transform: translateX(-3px);
    }
    .input-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        width: 100%;
        max-width: 340px;
        padding: 12px 20px;
        font-size: 15px;
        font-family: 'Quicksand', sans-serif;
        border-radius: 20px;
        border: 2px solid #ffb6c1;
        background: #ffffff;
        box-shadow: 0 4px 15px rgba(255, 182, 193, 0.2);
        text-align: center;
        color: #4a2e35;
        outline: none;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    input:focus {
        border-color: #ff1493;
        box-shadow: 0 0 15px rgba(255, 20, 147, 0.3);
        transform: scale(1.02);
    }
    .error-msg {
        color: #ff1744;
        font-size: 13px;
        height: 18px;
        margin-top: 6px;
        font-weight: 700;
        letter-spacing: 0.5px;
    }
    .ball-container {
        position: relative;
        width: 100%;
        max-width: 280px;
        aspect-ratio: 1 / 1;
        cursor: pointer;
        user-select: none;
        filter: drop-shadow(0 15px 25px rgba(219, 112, 147, 0.4));
    }
    .ball {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        justify-content: center; 
        align-items: center;
        position: relative;
        overflow: hidden;
        background-image: url('fog.jpg');
        background-size: cover;
        background-position: center;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: inset 0 0 25px rgba(199, 21, 133, 0.4);
    }
    .ball-container:hover .ball {
        transform: scale(1.04);
    }
    .ball::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: 
            radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%),
            radial-gradient(circle at 50% 50%, transparent 45%, rgba(139, 0, 139, 0.15) 80%, rgba(74, 0, 50, 0.3) 100%);
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), inset 0 -15px 30px rgba(199, 21, 133, 0.3);
        pointer-events: none;
    }
    .answer-text {
        position: relative;
        z-index: 5;
        text-align: center;
        color: #ffffff;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 1px;
        text-shadow: 0 3px 10px rgba(139, 0, 139, 0.5);
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);
const answers = [
    'Yes ✨', 'No 💫', 'Ask later 🔮', 'Maybe 💖'
];
const container = document.createElement('div');
container.className = 'card';
const backLink = document.createElement('a');
backLink.href = '../index.html';
backLink.className = 'back-link';
backLink.innerHTML = '← На головну';
container.appendChild(backLink);
const inputGroup = document.createElement('div');
inputGroup.className = 'input-wrapper';
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Введіть запитання...';
input.value = 'Чи буде завтра сонячно?';
const errorMsg = document.createElement('div');
errorMsg.className = 'error-msg';
inputGroup.appendChild(input);
inputGroup.appendChild(errorMsg);
const ballContainer = document.createElement('div');
ballContainer.className = 'ball-container';
const ball = document.createElement('div');
ball.className = 'ball';
const triangleWindow = document.createElement('div');
triangleWindow.className = 'triangle-window';
const answerText = document.createElement('div');
answerText.className = 'answer-text';
answerText.textContent = 'YES ✨'; 
triangleWindow.appendChild(answerText);
ball.appendChild(triangleWindow);
ballContainer.appendChild(ball);
container.appendChild(inputGroup);
container.appendChild(ballContainer);
document.body.appendChild(container);
function getPrediction() {
    const question = input.value.trim();
    if (question === '') {
        errorMsg.textContent = 'Будь ласка, введіть запитання! 🌸';
        return;
    } 
    if (!question.endsWith('?')) {
        errorMsg.textContent = 'Запитання має закінчуватися знаком "?" ✨';
        return;
    }
    errorMsg.textContent = '';
    ball.style.transform = 'scale(0.9) rotate(-3deg)';
    answerText.style.opacity = '0';
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerText.textContent = answers[randomIndex];
        ball.style.transform = 'scale(1) rotate(0deg)';
        answerText.style.opacity = '1';
    }, 200);
}
ballContainer.addEventListener('click', getPrediction);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getPrediction();
    }
});