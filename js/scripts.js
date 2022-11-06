window.addEventListener("load", function() {
  const outputdiv = document.getElementById("output");
  const form = document.querySelector("form");
  const headerdiv = document.getElementById("headerdiv");


  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let python = "Python"
    let javascript = "Javascript"
    let ruby = "Ruby"
    let assembly = "Assembly Language"
    let swift = "Swift"
    let foodAnswer = document.querySelector("input[name='food']:checked").value;

    if (foodAnswer === "hotdog") {
      output = python;
    } else if (foodAnswer === "hamburger") {
      output = javascript;
    } else if (foodAnswer === "kimchi") {
      output = ruby;
    } else if (foodAnswer === "celeryjuice") {
      output = assembly;
    } else if (foodAnswer === "buffalowings") {
      output = swift;
    }

    document.querySelector("span#language").innerText = output;
  
  form.addEventListener("submit", function() {
      headerdiv.setAttribute("class", "hidden");
      form.setAttribute("class", "hidden");
      outputdiv.removeAttribute("class", "hidden");
      
      

  })
  })
})




