const elForm = document.querySelector(".all-form");
const elBreadType = document.querySelector(".form__select");
const elBreadSize = document.querySelector(".form-radios");
const elTopList = document.querySelector(".form-checkboxes");
const elAddPrduct = document.querySelector(".form-checkboxes-extra");

const resultTypeBread = document.querySelector(".bread-type");
const resultSizePizza = document.querySelector(".pizza-size");
const resultTopList = document.querySelector(".result__top-list");
const resultAddraList = document.querySelector(".result__extra-list");


//ARR
let breadTypsesArry = [["Yupqa", "thin"], ["O'rta", "medium"], ["Qalin", "thick"]];
let breadSizesArr = [["25 sm", "small"], ["30 sm", "medium"], ["35 sm", "big"]];
let pizzaFaceArr = [["Pomidor", "tomato"], ["Tuzlangan bodring", "pickle"], ["Kurka go'shti", "turkey"], ["Qo'ziqorn", "mushrooms"], ["Zaytun", "olive"], ["Qazi", "sausage"]];
let AddProductaArr = [["Achchiq", "spicy"], ["Sosiskali", "sosiska"]];
let resultFaceArr = [];
let resultExtraArr = [];


// BREAD TYPE
  for (let i = 0; i < breadTypsesArry.length; i++) {
    let newOption = document.createElement("option");

    newOption.textContent = breadTypsesArry[i][0];
    newOption.value = breadTypsesArry[i][1];

    elBreadType.appendChild(newOption);
    resultTypeBread.textContent = breadTypsesArry[0][0]
  }


// PIZZA SIZE
  for (let i = 0; i < breadSizesArr.length; i++) {
    let newBox = document.createElement("div");
    let newInput = document.createElement("input");
    let newLabel = document.createElement("label");

    newInput.type ="radio";
    newInput.name = "pizza_size";
    newInput.value = breadSizesArr[i][1];
    newLabel.textContent = breadSizesArr[i][0];

    newBox.classList.add("radio-group");
    newLabel.classList.add("form__radio-label");
    newInput.classList.add("form__radio");

    newInput.setAttribute("id", breadSizesArr[i][1]);
    newLabel.setAttribute("for", breadSizesArr[i][1]);
    newInput.setAttribute("checked", "on");

    elBreadSize.appendChild(newBox);
    newBox.appendChild(newInput);
    newBox.appendChild(newLabel);
    resultSizePizza.textContent = newLabel.textContent;

  }


// ADD PIZAA FACE
  for (let i = 0; i < pizzaFaceArr.length; i++) {
      let newCheck = document.createElement("input");
      let checkLabel = document.createElement("label");
    let newLi = document.createElement("li");

    newCheck.type ="checkbox";
    newCheck.name = pizzaFaceArr[i][1];
    checkLabel.textContent = pizzaFaceArr[i][0];

    newCheck.classList.add("form-check-input");
    checkLabel.classList.add("fw-bold","fs-5", "ms-3");
    newLi.classList.add("list-item", "d-flex", "align-items-center", "mb-2");

    newCheck.setAttribute("id", pizzaFaceArr[i][1]);
    checkLabel.setAttribute("for", pizzaFaceArr[i][1]);

    elTopList.appendChild(newLi)
    newLi.appendChild(newCheck);
    newLi.appendChild(checkLabel)
}


// ADD PRODUCT
  for (let i = 0; i < AddProductaArr.length; i++) {
    let newCheck = document.createElement("input");
    let checkLabel = document.createElement("label");
    let newLi = document.createElement("li");
    newCheck.type ="checkbox";
    newCheck.name = AddProductaArr[i][1];
    checkLabel.textContent = AddProductaArr[i][0];

    newCheck.classList.add("form-check-input");
    checkLabel.classList.add("fw-bold","fs-5", "ms-3");
    newLi.classList.add("list-item", "d-flex", "align-items-center", "mb-2");

    newCheck.setAttribute("id", AddProductaArr[i][1]);
    checkLabel.setAttribute("for", AddProductaArr[i][1]);

    elAddPrduct.appendChild(newLi)
    newLi.appendChild(newCheck);
    newLi.appendChild(checkLabel)
  }






  //   funksiya BREAD TYPE
    elBreadType.addEventListener("change", function(e){
      for (let i = 0; i < breadTypsesArry.length; i++) {
        if (e.target.value === breadTypsesArry[i][1]){
          resultTypeBread.textContent = breadTypsesArry[i][0]
        }
      }
    })

    //   funksiya PIZZA SIZE
    elBreadSize.addEventListener("change", function(e){
        for (let i = 0; i < breadSizesArr.length; i++) {
            if (e.target.value === breadSizesArr[i][1]){
            resultSizePizza.textContent = breadSizesArr[i][0];
          }
        }
      })

      //   funskiya ADD PIZAA FACE
        elTopList.addEventListener("change", function(evt){
          resultTopList.innerHTML = "";

          if (evt.target.checked === true){
            for (let i = 0; i < pizzaFaceArr.length; i++) {
              if (evt.target.name === pizzaFaceArr[i][1]){
                  resultFaceArr.push(pizzaFaceArr[i][0])
              }
          }
      } else if (evt.target.checked == false){
            let targetIndex = resultFaceArr.indexOf(e.target.parentNode.childNodes[1].textContent)
            resultFaceArr.splice(targetIndex, 1);
          }

          for (let i = 0; i < resultFaceArr.length; i++) {
              let newLi = document.createElement("li");
              newLi.textContent = resultFaceArr[i];
              resultTopList.appendChild(newLi);
          }

      })

      //funksiya ADD PRODUCT FUNCTION
      elAddPrduct.addEventListener("change", function(e){
        resultAddraList.innerHTML = "";

          if (e.target.checked === true){
            for (let i = 0; i < AddProductaArr.length; i++) {
              if (e.target.name === AddProductaArr[i][1]){
                resultExtraArr.push(AddProductaArr[i][0])
              }
            }
          } else if (e.target.checked == false){
            let targetIndex = resultExtraArr.indexOf(e.target.parentNode.childNodes[1].textContent)
            resultExtraArr.splice(targetIndex, 1);
          }

          for (let i = 0; i < resultExtraArr.length; i++) {
              let newLi = document.createElement("li");
            newLi.textContent = resultExtraArr[i];
            resultAddraList.appendChild(newLi);
          }
          if (elFormBtn.clicked){
              e.target.checked === false;
          }
        })
