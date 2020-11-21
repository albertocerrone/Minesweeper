// TODO Functions to Do:
// TODO F to handle 3 levels of gaming: -Beginner 9*9 10bombs  -Intermediate 16*16 40bombs -Expert 30*16 99bombs (use Object)
// TODO Function Reset (to use every time the game start and when user click on the button with the face)
// // TODO Function to create random bombs position
// TODO Function to count how many bombs are around (this works just if firstClick = true and after bombs are place and before function to show the clicked cell and nearby)
// TODO Function to show the clicked cell and nearby
// TODO Function game lost


//* When game is starting, all the cells have one class of covered
//* The games have one array to handle where the bombs are 
//* The position of the bombs is decided after the user click the first cell
//* The first cell have always CellInfo.nBombsClose = 0
//* The bombs position are randomly decided and the value is stored in the array of object (switch CellInfo.nBombsClose = 0 )
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
  const cellsStatusInfo = []
  const firstClick = true //! this have to change after the first click

  //* Creating a Class to produce Object where I store info about the cell (if there is a bomb? or covered? etc)

  class CellInfo{
    constructor (idCell, cell, isCovered, haveBomb, haveFlag, nBombsClose){
      this.idCell = idCell           //same as i in createGrid
      this.cell = cell                //this store the div in the system
      this.isCovered = isCovered            //t||f
      this.haveBomb = haveBomb             //t||f
      this.haveFlag = haveFlag            //t||f
      this.nBombsClose = nBombsClose      //this will count the n of bombs around
    }
    //? function for add bombs here?
    //? function for count the bombs around here?
  }
  
  //* Functions

  function createGrid() {                   //This function create the cells in the grid with status of covered
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.dataset.id = i 
      cell.classList.add('covered') //! To put it back
      grid.appendChild(cell)
      cellsStatusInfo.push(new CellInfo(i, cell, true, false, false, 0))
      cell.innerHTML = cellsStatusInfo[i].nBombsClose  //! to remove i 
    }
  }

  function uncoverCell(event){              //This function change the class of the clicked cell from covered to uncovered
    const selected = event.target.dataset.id
    cellsStatusInfo[selected].isCovered = false
    cellsStatusInfo[selected].cell.classList.remove('covered')
    cellsStatusInfo[selected].cell.innerHTML = cellsStatusInfo[selected].nBombsClose

    // console.log(cellsStatusInfo)
  }


  function randomBombPosition(){      //This function allocate randomly the bombs in the field
    let bombsPlaced = 0
    while (bombsPlaced < nBombs) {
      const randomIndex = Math.floor(Math.random() * cellCount)
      if (cellsStatusInfo[randomIndex].haveBomb === false){
        cellsStatusInfo[randomIndex].haveBomb = true
        cellsStatusInfo[randomIndex].cell.classList.add('bomb')
        bombsCloseToMe(randomIndex)
        bombsPlaced++
      }
    }
  }
  

  function bombsCloseToMe(indexofthebomb){         // this function find how many bombs are close to every cell
    const  columnOfTheBomb = indexofthebomb % width                   //these return me the row where the bomb is located
    const rowOfTheBomb = Math.floor(indexofthebomb / width)

    let cellDistance

    console.log(indexofthebomb, columnOfTheBomb)
    // up-left corner
    if (rowOfTheBomb > 0 && columnOfTheBomb > 0) {
      cellDistance = -(width + 1)
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
    }
      
    // up-center
    if (rowOfTheBomb > 0) {
      cellDistance = -(width)
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
      
    } 
    //up-right
    if (rowOfTheBomb > 0 && columnOfTheBomb < width - 1) {
      cellDistance = -(width - 1)
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
      
    } 
    //left
    if (columnOfTheBomb > 0){
      cellDistance =  - 1
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
    }
    //right
    if (columnOfTheBomb < width - 1){
      cellDistance = + 1
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
    }
    //down-left
    if (rowOfTheBomb < height - 1 && columnOfTheBomb > 0) {
      cellDistance = width - 1
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
    }
    //down-center
    if (rowOfTheBomb < height - 1) {
      cellDistance = width
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
    }
    //down-right
    if (rowOfTheBomb < height - 1 && columnOfTheBomb < width - 1) {
      cellDistance = width + 1
      cellsStatusInfo[indexofthebomb + cellDistance].nBombsClose++
      console.log(cellsStatusInfo[indexofthebomb + cellDistance])
    }
  
  }
  



  //! Tests...To remove at the end
  console.log(cellsStatusInfo)
  

  //*Event listeners
  createGrid()
  randomBombPosition()

  cellsStatusInfo.forEach(cells => 
    cells.cell.addEventListener('click', uncoverCell))
}
window.addEventListener('DOMContentLoaded',init)