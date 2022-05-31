// Cashed Element References //

const h1 = document.querySelector(`h1`)
const input = document.querySelector(`#input`)
const button = document.querySelector(`#submit-button`)
const ulList = document.querySelector(`#todo-list`)
const form = document.querySelector(`#form`)


button.addEventListener(`click`, addLi)  



function addLi(evt) {
  let newLi = document.createElement(`li`)
  newLi.textContent = input.value
  input.value = ``
  ulList.appendChild(newLi)
  console.log(`DO YOU WORK?`)
}
