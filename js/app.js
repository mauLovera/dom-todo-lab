// Cashed Element References //

const h1 = document.querySelector(`h1`)
const input = document.querySelector(`#input`)
const button = document.querySelector(`#submit-button`)
const ulList = document.querySelector(`#todo-list`)
const form = document.querySelector(`#form`)
const remove = document.querySelector(`#todo-list`)

// Variables //

let newLi = document.createElement(`li`)

// Event Listener //

button.addEventListener(`click`, addLi)
remove.addEventListener(`click`, removeLi) 


// Functions //

function addLi(evt) {
  if (input.value !== '') {
  newLi = document.createElement(`li`)
  newLi.textContent = input.value
  input.value = ``
  ulList.appendChild(newLi)
  newLi.className = 'list-item'
  console.log(`DO YOU WORK?`)
  }
}

// On click of the li items within Ul it will remove them
function removeLi() {
  ulList.removeChild(ulList.querySelector(`.list-item`))
  console.log(`do you work?`)
}