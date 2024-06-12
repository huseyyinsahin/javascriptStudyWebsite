const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const progressBar = document.querySelector(".progress-bar");
const progressBarSpan = document.querySelector(".progress-bar span");

let progress = 0;

nextButton.addEventListener("click", () => {
  progress += 4;
  if (progress > 100) {
    progress = 100;
  }
  updateProgressBar();
});
backButton.addEventListener("click", () => {
  progress -= 4;
  if (progress < 0) {
    progress = 0;
  }
  updateProgressBar();
});

function updateProgressBar() {
  progressBar.style.width = progress + "%";
  progressBarSpan.textContent = progress + "%";
}
