const elForm = document.querySelector(".form");
const elformSelect = document.querySelector(".form-select");


// BREAD FORM CREATE ELEMENT
let newOptionOne = document.createElement("option");
let newOptionTwo = document.createElement("option");
let newOptionThree = document.createElement("option");

// BREAD FORM TEXTCONTENT
newOptionOne.textContent = "Yupqa"
newOptionTwo.textContent = "Qalin"
newOptionThree.textContent = "Ortacha"

// BREAD FORM APPENDCHILD
elformSelect.appendChild(newOptionOne);
elformSelect.appendChild(newOptionTwo)
elformSelect.appendChild(newOptionThree)







// elForm.addEventListener("submit", function(evt) {
//     evt.preventDefault()

// })