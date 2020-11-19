// TODO Functions to Do:
// TODO F to handle 3 levels of gaming: -Beginner 9*9 10bombs  -Intermediate 16*16 40bombs -Expert 30*16 99bombs (use Object)
// TODO Function Reset (to use every time the game start and when user click on the button with the face)
// TODO Function to create random bombs position
// TODO Function game lost


//* When game is starting, all the cells have one class of covered
//* The games have one array to handle where the bombs are 
//* The position of the bombs is decided after the user click the first cell
//* The bombs position are randomly decided and the value is stored in the array
//* From the bombs position, give a counter to the cells that are close to the bomb (this value starts always from 0 and show the bombs closer)
//* If the cell counter is 0, when user click on it reveal all the one that are close there


function init() {
  //* Variables
  const grid = document.querySelector('.grid') //Selecting the div

  //*Testing with easy level
  const width = 9
  const height = 9
  const cellCount = width * height
  const nBombs = 10
  const cells = []
  
  function createGrid() {                   //This function create the cells in the grid
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    
  }



  //*Event listeners
  createGrid()

}
window.addEventListener('DOMContentLoaded',init)