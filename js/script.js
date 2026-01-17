const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");

const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.getElementById("noBtn");
const btnContainer = document.querySelector(".button-container");


btnContainer.style.position = "relative";
noBtn.style.position = "absolute";

noBtn.addEventListener("mousemove", () => {
  const containerRect = btnContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 500; 

  const maxX = containerRect.width - btnRect.width - padding;
  const maxY = containerRect.height - btnRect.height - padding;

  let x = Math.random() * maxX + padding / 2;
  let y = Math.random() * maxY + padding / 2;
  
  if (Math.random() > 0.5) {
    noBtn.style.left = `${x}px`;
  } else {
    noBtn.style.top = `${y}px`;
  }

  // smooth movement
  noBtn.style.transition = "all 0.3s ease";
});

// Yes button flow
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
  }, 2500);
});