
// onkeydown = function holdKey(evt) {
//   keyHolder[evt.keyCode] = evt.type === `keydown` 
//   if (keyHolder[8] && keyHolder[16]) {
  //     ulList.removeChild(ulList.querySelector(`.list-item`))
//     keyHolder.splice(0, keyHolder.length)
//   } else if (!keyHolder[16]) {
//     keyHolder.splice(0, keyHolder.length)
//     console.log(`works`)
//   } 
//   console.log(keyHolder)
// }

// Variables //
  
let keyHolder = []
let upKeyHolder = []
let newLi = document.createElement(`li`)

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


// Event Listener //
button.addEventListener(`click`, addLi)
clickRemove.addEventListener(`click`, removeLi) 
resetButton.addEventListener(`click`, resetUl) 
form.addEventListener(`submit`, formEvt)
window.addEventListener(`keydown`, keyHolder)
window.addEventListener(`keyup`, upKeyHolder)

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


// key logger and shift delete li functionality 

onkeydown = function holdKey(evt) {
  keyHolder[evt.keyCode] = evt.type === `keydown` 
  if (keyHolder[8] && keyHolder[16] && keyHolder[13]) { 
    // if delete shift and enter exist at the same time in the array - empty the array 
    keyHolder.splice(0, keyHolder.length)
    console.log(`empty with shift delete and enter`)
  } else if (keyHolder[8] && keyHolder[16] && keyHolder[32]) {
    console.log('RESET')
    resetUl()
  } else if (keyHolder[16] && keyHolder[8]) { 
    // if shift and delete are pressed - delete a li and empty the array
    ulList.removeChild(ulList.querySelector(`.list-item`))
    do {
    keyHolder.splice(0, keyHolder.length, 16)
    console.log(`do while`)
    } while (keyHolder === [])
    console.log(`empty with shift and delete`)
  } else if (keyHolder[8] && !keyHolder[16]) { 
    // if delete exists (because the user deleted a word in input) and shift does not - empty the array
    keyHolder.splice(0, keyHolder.length)
    console.log(`empty with delete and no shift`)
  } else if (!keyHolder[16] && !keyHolder[8] && !keyHolder[32]) {
    // if shift and delete does not exist - dont log the array 
    keyHolder.splice(0, keyHolder.length)
    console.log(`empty because its not shift or delete`)
  } else if (keyHolder[13]) { // if enter exists - empty the array 
    keyHolder.splice(0, keyHolder.length)
    console.log(`empty with enter`)
  } 
  console.log(keyHolder)
}

onkeyup = function upKey(evt) {
  upKeyHolder[evt.keyCode] = evt.type === `keyup`
  if (upKeyHolder[16]) {
  keyHolder.splice(0, keyHolder.length)
  console.log(`log something please`)
  } // else if (upKeyHolder[8]) {
  // keyHolder.splice(0, 0, 16)
  // console.log(`log 8 please`) 
  // console.log(keyHolder) 
  // }
}



// onkeydown = function holdKey(evt) {
//   keyHolder[evt.keyCode] = evt.type === `keydown` 
//   if (keyHolder[8] && keyHolder[16] && keyHolder[13]) { 
//     // if delete shift and enter exist at the same time in the array - empty the array 
//     keyHolder.splice(0, keyHolder.length)
//     console.log(`empty with shift delete and enter`)
//   } else if (keyHolder[16] && keyHolder[8]) { 
//     // if shift and delete are pressed - delete a li and empty the array
//     if (upKey[16]) {
//       this.onkeydown = onkeyup = function onUpKey() {
//         upKey[evt.keyCode] = evt.type === `keyup`
//         keyHolder.splice(0, keyHolder.length)
//         console.log(`log something please`)
//       }
//     } else {
//     ulList.removeChild(ulList.querySelector(`.list-item`))
//     keyHolder.splice(0, keyHolder.length)
//     console.log(`empty with shift and delete`)
//     }
//   } else if (keyHolder[8] && !keyHolder[16]) { 
//     // if delete exists (because the user deleted a word in input) and shift does not - empty the array
//     keyHolder.splice(0, keyHolder.length)
//     console.log(`empty with delete and no shift`)
//   } else if (!keyHolder[16] && !keyHolder[8]) {
//     // if shift and delete does not exist - dont log the array 
//     keyHolder.splice(0, keyHolder.length)
//     console.log(`empty because its not shift or delete`)
//   } else if (keyHolder[13]) { // if enter exists - empty the array 
//     keyHolder.splice(0, keyHolder.length)
//     console.log(`empty with enter`)
//   }
//   console.log(keyHolder)
// }


