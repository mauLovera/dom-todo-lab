// Cashed Element References //

const h1 = document.querySelector(`h1`)
const form = document.querySelector(`#main`)
const input = document.querySelector(`#input`)

const button = document.querySelector(`#submit-button`)
const resetButton = document.querySelector(`#reset-button`)

const ulList = document.querySelector(`#todo-list`)

// Remove on Click and Del Key //
const clickRemove = document.querySelector(`#todo-list`)
const delRemove = document.querySelector(`#todo-list`)

// Variables //

let newLi = document.createElement(`li`)

// Event Listener //
button.addEventListener(`click`, addLi)
clickRemove.addEventListener(`click`, removeLi) 
resetButton.addEventListener(`click`, resetUl) 
form.addEventListener(`submit`, formEvt)
window.addEventListener(`keydown`, delLi)

// Functions //

// On click of the Add todo button it will all the value of the input field to the todo ul as an li 
function addLi() {
  if (input.value !== '') {
  newLi = document.createElement(`li`)
  newLi.textContent = input.value
  input.value = ``
  ulList.appendChild(newLi)
  newLi.className = 'list-item'
  console.log(`li added`)
  }
}

// On click of the li items within Ul it will remove them
function removeLi() {
  ulList.removeChild(ulList.querySelector(`.list-item`))
  console.log(`li was clicked`)
}

// On click of reset button it will remove every child within the ul with a while loop
function resetUl() {
  let newUl = document.querySelector(`#todo-list`)
  while (newUl.firstChild) { // while newUl.firstChild is TRUE - it EXISTS - remove each child of it
    newUl.removeChild(newUl.lastChild)
    console.log(`ul reset`)
  }
}

// stops form from refreshing page
function formEvt(evt) {
  evt.preventDefault();
}

// function delLi(evt) {
//   if (evt.keyCode === 8) {
//     ulList.removeChild(ulList.querySelector(`.list-item`))
//     console.log('Keys were pressed')
//   }
// }

function delLi(evt) {
  switch (evt.keyCode) {
    case 8 && 16:
      ulList.removeChild(ulList.querySelector(`.list-item`))
      console.log(`keys were pressed`)
  }
}