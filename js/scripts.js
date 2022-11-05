window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let button = document.getElementById("submit");

  form.addEventListener("submit", function(event) {
    const foodAnswer = document.querySelector("input[name='food']:checked").value;