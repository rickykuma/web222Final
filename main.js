addEventListener("DOMContentLoaded", function () {
  let start = document.getElementById("rate-div");
  start.style.display = "none";
  let hiringChoice = document.getElementById("hiring");
  hiringChoice.addEventListener("click", () => {
    let rateDiv = document.getElementById("rate-div");
    rateDiv.style.display = "block";
  });
  let commentChoice = document.getElementById("comment");
  commentChoice.addEventListener("click", () => {
    let commentChoice = document.getElementById("rate-div");
    commentChoice.style.display = "none";
  });
  let questionChoice = document.getElementById("question");
  questionChoice.addEventListener("click", () => {
    let questionChoice = document.getElementById("rate-div");
    questionChoice.style.display = "none";
  });
});
