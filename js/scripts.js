
let python = "Python"
let javascript = "Javascript"
let ruby = "Ruby"
let assembly = "Assembly Language"
let swift = "Swift"


window.addEventListener("load", function() {
  const form = document.querySelector("form");
  const button = document.getElementById("submit");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const foodAnswer = document.querySelector("input[name='food']:checked").value;

    if (foodAnswer === "hotdog") {
      document.querySelector("span#language") = python;
    } else if (foodAnswer === "hamburger") {
      document.querySelector("span#language") = javascript;
    } else if (foodAnswer === "kimchi") {
      document.querySelector("span#language") = ruby;
    } else if (foodAnswer === "celeryjuice") {
      document.querySelector("span#language") = assembly;
    } else if (foodAnswer === "buffalowings") {
      document.querySelector("span#language") = swift
    }
    
  
  form.addEventListener("submit", function() {
      button.removeAttribute("class");
      form.setAttribute("class", "hidden");
  
  })})})




