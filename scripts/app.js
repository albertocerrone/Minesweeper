// TODO Functions to:
// TODO handle 3 levels of gaming: -Beginner 9*9  -Intermediate 16*16 -Expert 30*16

//* When game is starting, all the cells have one class of covered
//*The 

function init() {
  //* Variables

  const grid = document.querySelector('.grid')
  //*Testing with easy level
  const width = 9
  const height = 9
  const cellCount = width * height
  const cells = []
  
  function createGrid() {
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