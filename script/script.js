// js-section
const animationText = document.getElementById("js-p");
const yazilar = ["console.log('Kodluyoruz')", "Javascript <3"];
let index = 0;
let interval;

function silVeYaz() {
  let yazi = yazilar[index];
  let i = 0;
  interval = setInterval(() => {
    if (i < yazi.length) {
      animationText.textContent = yazi.substring(0, i + 1);
      i++;
    } else {
      clearInterval(interval);
      setTimeout(sil, 1000);
    }
  }, 100);
}

function sil() {
  let yazi = yazilar[index];
  let i = yazi.length;
  interval = setInterval(() => {
    if (i > 0) {
      animationText.textContent = yazi.substring(0, i - 1);
      i--;
    } else {
      clearInterval(interval);
      index = (index + 1) % yazilar.length;
      setTimeout(silVeYaz, 500);
    }
  }, 100);
}
silVeYaz();
