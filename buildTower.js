// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/javascript

function towerBuilder(nFloors) {
    // outer loop per line
    const result = []
    
    for (let i = 0; i < nFloors; i++) {
      // inner loop per item
      let printedFloor = ''
      for (let j = 0; j < 2 * nFloors -1 ; j++) {
        if (j < nFloors - 1 - i || j > nFloors - 1 + i) {
          printedFloor+= ' '
        } else {
          printedFloor+= '*'
        }
      }
      result.push(printedFloor)
    } 
    return result
  }
  
  
  towerBuilder(1)