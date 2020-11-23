// TODO Functions to Do:
// TODO F to handle 3 levels of gaming: -Beginner 9*9 10bombs  -Intermediate 16*16 40bombs -Expert 30*16 99bombs (use Object)
// TODO Function Reset (to use every time the game start and when user click on the button with the face)
// // TODO Function to create random bombs position
// // TODO Function to count how many bombs are around (this works just if firstClick = true and after bombs are place and before function to show the clicked cell and nearby)
// // TODO Function to show the clicked cell and nearby
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
  let firstClick = true //! this have to change after the first click

  //* Creating a Class to produce Object where I store info about the cell (if there is a bomb? or covered? etc)

  class CellInfo{
    constructor (idCell, cell, column, row, isCovered, haveBomb, haveFlag, nBombsClose){
      this.idCell = idCell           //same as i in createGrid
      this.cell = cell                //this store the div in the system
      this.column = column            //this track the column
      this.row = row                    // this track the row
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
      const column = i % width
      const row = Math.floor(i / width)
      cellsStatusInfo.push(new CellInfo(i, cell, column, row, true, false, false, 0))
      //cell.innerHTML = cellsStatusInfo[i].nBombsClose  //! to remove  
    }
  }

  function revealCellsAround (index){ 
    const cellsAround = whoIsCloseToMe(parseInt(index))
    console.log(cellsAround)
    for (let i = 0; i < cellsAround.length; i++){
      if (cellsStatusInfo[cellsAround[i]].isCovered === true){
        console.log(cellsAround[i])
        uncoverCell(cellsAround[i])
      }
      
    }
  }

  function uncoverCell(selected){              //This function change the class of the clicked cell from covered to uncovered
    cellsStatusInfo[selected].isCovered = false
    cellsStatusInfo[selected].cell.classList.remove('covered')
    cellsStatusInfo[selected].cell.innerHTML = cellsStatusInfo[selected].nBombsClose
    if (firstClick === true){
      console.log('im the first click')
      while (cellsStatusInfo[selected].haveBomb === true || cellsStatusInfo[selected].nBombsClose !== 0) {
        console.log('i have a bomb')
        removeAllBombs()
        randomBombPosition()
      }
      cellsStatusInfo[selected].cell.innerHTML = cellsStatusInfo[selected].nBombsClose
      firstClick = false
    }
    if (cellsStatusInfo[selected].nBombsClose === 0){
      revealCellsAround(selected)
    } 
  }

  function removeAllBombs(){            // This function removes all the bombs
    for (let i = 0; i < cellCount; i++){
      cellsStatusInfo[i].nBombsClose = 0
      if (cellsStatusInfo[i].haveBomb === true){
        cellsStatusInfo[i].haveBomb = false
        cellsStatusInfo[i].cell.classList.remove('bomb')       
      }
    }
    
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
  

  function bombsCloseToMe(indexOfTheBomb){ // this function find how many bombs are close to every cell
    const nearby = whoIsCloseToMe(indexOfTheBomb)
    for (let i = 0; i < nearby.length; i++){
      cellsStatusInfo[nearby[i]].nBombsClose++
    }

  }

  function whoIsCloseToMe(index){         // this function returns an array of cell close to the given index
    const  column = cellsStatusInfo[index].column    //these return me the column 
    const row = cellsStatusInfo[index].row        //these return me the row 
    let cellDistance
    const closeToMe = []
    // up-left corner
    if (row > 0 && column > 0) {
      cellDistance = -(width + 1)
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)
    }  
    // up-center
    if (row > 0) {
      cellDistance = -(width)
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)   
    } 
    //up-right
    if (row > 0 && column < width - 1) {
      cellDistance = -(width - 1)
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)   
    } 
    //left
    if (column > 0){
      cellDistance =  - 1
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)
    }
    //right
    if (column < width - 1){
      cellDistance = + 1
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)
    }
    //down-left
    if (row < height - 1 && column > 0) {
      cellDistance = width - 1
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)
    }
    //down-center
    if (row < height - 1) {
      cellDistance = width
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)
    }
    //down-right
    if (row < height - 1 && column < width - 1) {
      cellDistance = width + 1
      closeToMe.push(cellsStatusInfo[index + cellDistance].idCell)
    }
    return closeToMe
  }
  
  function addFlag(event){
    event.preventDefault()
    const selected = event.target.dataset.id
    if (cellsStatusInfo[selected].isCovered === true) {
      cellsStatusInfo[selected].cell.classList.add('flagged')
      cellsStatusInfo[selected].haveFlag = true
    }
  }
  function game (event){
    const selected = event.target.dataset.id
    //TODO timer starts function
    
    uncoverCell(selected)
  }


  //! Tests...To remove at the end
  console.log(cellsStatusInfo)
  

  //*Event listeners
  createGrid()
  randomBombPosition()
  

  cellsStatusInfo.forEach(cells => 
    cells.cell.addEventListener('click', game))
  cellsStatusInfo.forEach(cells => 
    cells.cell.addEventListener('contextmenu', addFlag))
}
window.addEventListener('DOMContentLoaded',init)