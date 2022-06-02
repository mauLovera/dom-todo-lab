/* --------------------------Variables--------------------------*/ 

/* KeyCode Data Arrays */
let downKeyHolder = []
let upKeyHolder = []

/* Create Elements */
let newLi = document.createElement('li')

/* -----------------Cashed Element References-------------------*/ 

const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input = document.querySelector('#input')

const postButton = document.querySelector('#submit-button')
const resetButton = document.querySelector('#reset-button')

const ulList = document.querySelector('#todo-list')

const clickRemove = document.querySelector('#todo-list')
const delRemove = document.querySelector('#todo-list')

/* -----------------------Event Listeners------------------------*/ 

// On click: add the input value as an li to the ul
postButton.addEventListener('click', addLi)
form.addEventListener('submit', formEvt) // on 'enter'

// On click: remove the li from the ul
clickRemove.addEventListener('click', removeLi) 

// On click: remove all li children from ul 
resetButton.addEventListener('click', resetUl)

// KeyCode Listeners and Keyboard Commands
window.addEventListener('keydown', downKeyHolder)
window.addEventListener('keyup', upKeyHolder)

/* --------------------------Functions---------------------------*/ 

function addLi() {
  if (input.value !== '') {
    newLi = document.createElement('li')
    newLi.textContent = input.value
    input.value = ''
    ulList.appendChild(newLi)
    newLi.className = 'list-item'
    console.log('li added')
  }
}

/** 
  * Removes a created li from the ul
  * On click of the li 
  */  

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


// key logger and shift delete li // shift delete enter reset ui // functionality 

// I can turn this into a chat app! 

// DEFINITELY REFRACTOR ANOTHER DAY

// bug: user can submit just empty string with a space in it 


onkeydown = function holdKey(evt) {
  downKeyHolder[evt.keyCode] = evt.type === `keydown` 
  if (downKeyHolder[8] && downKeyHolder[16] && downKeyHolder[13]) { 
    // if delete shift and enter exist at the same time in the array - empty the array 
      downKeyHolder.splice(0, downKeyHolder.length)
      console.log(`empty with shift delete and enter`)
  } else if (downKeyHolder[8] && downKeyHolder[16] && downKeyHolder[32]) { // shift delete enter reset 
      console.log('RESET')
      resetUl()
  } else if (downKeyHolder[16] && downKeyHolder[8]) { 
    // if shift and delete are pressed - delete a li and empty the array
      ulList.removeChild(ulList.querySelector(`.list-item`))
      do {
        downKeyHolder.splice(0, downKeyHolder.length, 16)
        console.log(`do while`)
      } while (downKeyHolder === [])
      console.log(`empty with shift and delete`)
  } else if (downKeyHolder[8] && !downKeyHolder[16]) { 
    // if delete exists (because the user deleted a word in input) and shift does not - empty the array
      downKeyHolder.splice(0, downKeyHolder.length)
      console.log(`empty with delete and no shift`)
  } else if (!downKeyHolder[16] && !downKeyHolder[8] && !downKeyHolder[32]) {
    // if shift and delete does not exist - dont log the array 
      downKeyHolder.splice(0, downKeyHolder.length)
      console.log(`empty because its not shift or delete`)
  } else if (downKeyHolder[13]) { // if enter exists - empty the array 
      downKeyHolder.splice(0, downKeyHolder.length)
      console.log(`empty with enter`)
  } 
  console.log(downKeyHolder)
}

// adds a safeguard for clearing array if shift is lifted which in turn fixes bug that deleted li when 
// user used special characters or capital letters

onkeyup = function upKey(evt) {
  upKeyHolder[evt.keyCode] = evt.type === `keyup`
  if (upKeyHolder[16]) {
    downKeyHolder.splice(0, downKeyHolder.length)
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


