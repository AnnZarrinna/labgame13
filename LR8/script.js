document.addEventListener("DOMContentLoaded", () => {
    let userName = "";
    while (!userName || userName.trim() === "") {
        const input = prompt("Введіть ваше ім'я:");
        if (input === null) {
            userName = "Гравець"; 
        } else {
            userName = input.trim();
        }
    }  
    document.getElementById("userName").textContent = userName;
    let userScore = 0;
    let compScore = 0;
    const maxWins = 3;
    const userScoreEl = document.getElementById("userScore");
    const compScoreEl = document.getElementById("compScore");
    const userNumEl = document.getElementById("userNum");
    const compNumEl = document.getElementById("compNum");
    const generateBtn = document.getElementById("generateBtn");
    const statusMsg = document.getElementById("statusMsg");
    const restartBtn = document.getElementById("restartBtn");
    generateBtn.addEventListener("click", () => {
        const userValue = Math.floor(Math.random() * 10) + 1;
        const compValue = Math.floor(Math.random() * 10) + 1;
        userNumEl.textContent = userValue;
        compNumEl.textContent = compValue;
        if (userValue > compValue) {
            userScore++;
            userScoreEl.textContent = userScore;
            statusMsg.textContent = `Раунд за ${userName}! (${userValue} > ${compValue})`;
        } else if (compValue > userValue) {
            compScore++;
            compScoreEl.textContent = compScore;
            statusMsg.textContent = `Раунд за Комп'ютером! (${compValue} > ${userValue})`;
        } else {
            statusMsg.textContent = `Нічия! (${userValue} = ${compValue})`;
        }
        if (userScore === maxWins || compScore === maxWins) {
            generateBtn.disabled = true;
            restartBtn.classList.remove("hidden");
            
            if (userScore === maxWins) {
                statusMsg.textContent = `Вітаємо, ${userName}! Ви перемогли з рахунком ${userScore}:${compScore}!`;
            } else {
                statusMsg.textContent = `Переміг Комп'ютер з рахунком ${compScore}:${userScore}!`;
            }
        }
    });
    restartBtn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        userScoreEl.textContent = "0";
        compScoreEl.textContent = "0";
        userNumEl.textContent = "-";
        compNumEl.textContent = "-";
        generateBtn.disabled = false;
        restartBtn.classList.add("hidden");
        statusMsg.textContent = 'Натисніть "Generate" для ходу';
    });
});