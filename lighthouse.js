    const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

function countRows() {
  return GRID.length;
}
function countColumns() {
  return GRID[0].length;
}

let gridWidth = countColumns();
let gridHeight = countRows();

function gridSize() {
  return `${gridWidth} x ${gridHeight}`;
}
function totalCells() {
  return gridWidth*gridHeight;
}
function convertColumn(cell) {
  cellNum = cell.toUpperCase().charCodeAt(0) - 65;
  return cellNum;
}
function convertRow(cell) {
  return cell.substring(1) - 1;
} 
function getCoords(rowIndex, colIndex) {
  rowNum = rowIndex + 1;
  colLetter = String.fromCharCode(65 + colIndex);
  return `${colLetter}${rowNum}`;
}
function lightCell(cell) {
  cellX = convertColumn(cell);
  cellY = convertRow(cell);
  if (cellX >= 0 && cellX < countColumns() && cellY >= 0 && cellY < countRows()){
    return GRID[cellY][cellX]; }
  else {return false;}
}
function isRock(cell) {
  if(lightCell(cell) == "^") {
    return true;}
  else {return false;}
}
function isCurrent(cell) {
  if(lightCell(cell) == "~") {
    return true;}
  else {return false;}
 }
 function isShip(cell) {
  if(lightCell(cell) == "v") {
    return true;}
  else {return false;}
 }
function lightRow(rowNum) {
  row = GRID[rowNum-1];
  return row;
}
function lightColumn(colLetter) {
  colNum = convertColumn(colLetter);
  colArray = [];
  for(i=0;i<countRows();i++){
    colArray.push(GRID[i][colNum]);
  }
  return colArray;
}
function allRocks() {
  rockArray = [];
  GRID.forEach((row,rowIndex) => {
    row.forEach((col, colIndex) => {
      cellCoords = getCoords(rowIndex,colIndex);
      if (isRock(cellCoords) === true) {
        rockArray.push(cellCoords)
      }
    });
  });
  return rockArray;
}
function allCurrents() {
  currentArray = [];
  GRID.forEach((row,rowIndex) => {
    row.forEach((col, colIndex) => {
      cellCoords = getCoords(rowIndex,colIndex);
      if (isCurrent(cellCoords) === true) {
        currentArray.push(cellCoords)
      }
    });
  });
  return currentArray;
}
function allShips() {
  shipArray = [];
  GRID.forEach((row,rowIndex) => {
    row.forEach((col, colIndex) => {
      cellCoords = getCoords(rowIndex,colIndex);
      if (isShip(cellCoords) === true) {
        shipArray.push(cellCoords)
      }
    });
  });
  return shipArray;
}
function firstRock() {
  return allRocks()[0];
}
function firstCurrent() {
  return allCurrents()[0];
}
function shipReport() {
  colSortedShips = allShips().concat().sort();
  firstLastArr = [colSortedShips[0], colSortedShips[colSortedShips.length-1]];
  return firstLastArr
}
function howDangerous(cell) {
  if (isRock(cell)) {
    return 100;
  }
  else if (isCurrent(cell)) {
    return 50;
  }
  else {return 0}
}

function percentageReport() {
  totalRocks = allRocks().length;
  totalCurrents = allCurrents().length;
  percentRocks = (totalRocks / totalCells() * 100).toFixed(2);
  percentCurrents = (totalCurrents / totalCells() * 100).toFixed(2);
  return [percentRocks,percentCurrents];
}

function safetyReport() {
  safetyGrid = GRID.concat().map((row,rowIndex) => {
    return row.map((cell, colIndex) => {
      cellCoords = getCoords(rowIndex, colIndex);
      return howDangerous(cellCoords);
    });
  });
  return safetyGrid;
}

function calcDistance(coord1,coord2) {
  x1 = convertColumn(coord1);
  y1 = convertRow(coord1);
  x2 = convertColumn(coord2);
  y2 = convertRow(coord2);
  distSquared = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2);
  distance = Math.sqrt(distSquared);
  return distance.toFixed(2);
}

console.log(calcDistance('A1','B2'));
