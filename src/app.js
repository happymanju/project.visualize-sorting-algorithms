/*
const { use } = require("chai");
const { doc } = require("prettier");
/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

function sortArray() {
  const sort = new Sort([2, 8, 3, 7, 0, 9, 1, 4, 6]);
  sort.sort();
  for (let step of sort.steps) {
    addStepToHtml(step);
  }

  return;
}

function addStepToHtml(array) {
  const wrapper = document.querySelector(".wrapper");
  const container = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = String(array);
  container.append(p);
  wrapper.append(container);
  return;
}

document.getElementById("submit-button").addEventListener("click", sortArray);
