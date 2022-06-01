// Cashed Element References //

const h1 = document.querySelector(`h1`)
const input = document.querySelector(`#input`)

const button = document.querySelector(`#submit-button`)
const resetButton = document.querySelector(`#reset-button`)

const ulList = document.querySelector(`#todo-list`)

// Remove on Click //
const remove = document.querySelector(`#todo-list`)

// Variables //

let newLi = document.createElement(`li`)

// Event Listener //

button.addEventListener(`click`, addLi)
remove.addEventListener(`click`, removeLi) 
resetButton.addEventListener(`click`, resetUl) 



// Functions //

// On click of the Add todo button it will all the value of the input field to the todo ul as an li 
function addLi() {
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
  console.log(`Do you work?`)
}

// On click of reset button it will remove every child within the ul with a while loop
function resetUl() {
  let newUl = document.querySelector(`#todo-list`)
  while (newUl.firstChild) { // while newUl.firstChild is TRUE - it EXISTS - remove each child of it
    newUl.removeChild(newUl.lastChild)
  }
}