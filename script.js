$(document).ready(function() {
        $('#acceptRulesBtn').on('click', function() {
            $('#rulesModal, .rules-card').fadeOut(400, function() {
                $(this).remove();
            });
        });
    });
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sakuraContainer");
  const petalCount = 28; // Кількість пелюсток

  for (let i = 0; i < petalCount; i++) {
    createPetal(true);
  }
  
  function createPetal(isInitial = false) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    
    const size = Math.random() * 10 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    if (isInitial) {
      petal.style.top = `${Math.random() * 100}vh`;
    } else {
      petal.style.top = `-10vh`;
    }    
    const duration = Math.random() * 7 + 6;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;   
    container.appendChild(petal);
    setTimeout(() => {
      petal.remove();
      createPetal(false);
    }, duration * 1000);
  }
  if (typeof $ !== 'undefined') {
    $('.portal-btn').hover(
      function() {
        $(this).stop().animate({ marginTop: '-4px' }, 200);
      },
      function() {
        $(this).stop().animate({ marginTop: '0px' }, 200);
      }
    );
  }
});