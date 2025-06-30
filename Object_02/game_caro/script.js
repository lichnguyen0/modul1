const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;
const DEFAULT_COLS = 10;
const DEFAULT_ROWS = 10;
const DEFAULT_CELL_SIZE = 40;

let gameBoard; // To make accessible in play()

function createCell(x, y) {
    return {
        x: x,
        y: y,
        value: VALUE_EMPTY,
        getHtml: function () {
            const top = this.x * DEFAULT_CELL_SIZE;
            const left = this.y * DEFAULT_CELL_SIZE;
            return '<div id="cell-' + this.x + '-' + this.y + '" onclick="play(' + this.x + ',' + this.y + ')" class="cell" style="position: absolute; width:' +
                DEFAULT_CELL_SIZE + 'px; height:' +
                DEFAULT_CELL_SIZE + 'px; left:' +
                left + 'px; top:' +
                top + 'px; line-height:' +
                DEFAULT_CELL_SIZE + 'px;"></div>';

        }
        ,
        draw: function () {
            const cellDiv = document.getElementById(`cell-${this.x}-${this.y}`);
            if (!cellDiv) return;
            cellDiv.innerHTML = this.value === VALUE_X ? "X" : this.value === VALUE_O ? "O" : "";
        }
    };
}

function createGameBoard(rows, cols, elementId) {
    return {
        rows: rows,
        cols: cols,
        elementId: elementId,
        turn: VALUE_O,
        cells: [],
        isOver: false,

        draw: function () {
            const gameBoardDiv = document.getElementById(this.elementId);
            gameBoardDiv.innerHTML = "";
            this.cells = [];

            for (let i = 0; i < this.rows; i++) {
                const row = [];
                this.cells.push(row);
                for (let j = 0; j < this.cols; j++) {
                    const cell = createCell(i, j);
                    row.push(cell);
                    gameBoardDiv.innerHTML += cell.getHtml();
                }
            }
        },

        play: function (x, y) {
            if (this.isOver) return;
            const cell = this.cells[x][y];
            if (cell.value === VALUE_EMPTY) {
                cell.value = this.turn;
                cell.draw();
                this.check(x, y);
                this.turn = this.turn === VALUE_O ? VALUE_X : VALUE_O;
            } else {
                alert("Cell is not empty");
            }
        },

        check: function (x, y) {
            const directions = [
                { dx: 0, dy: 1 },  // Horizontal
                { dx: 1, dy: 0 },  // Vertical
                { dx: 1, dy: 1 },  // Diagonal \
                { dx: -1, dy: 1 }  // Diagonal /
            ];
            const cell = this.cells[x][y];

            for (let dir of directions) {
                let count = 1;

                for (let step = 1; step < 5; step++) {
                    let nx = x + dir.dx * step;
                    let ny = y + dir.dy * step;
                    if (nx >= 0 && ny >= 0 && nx < this.rows && ny < this.cols && this.cells[nx][ny].value === cell.value) {
                        count++;
                    } else break;
                }

                for (let step = 1; step < 5; step++) {
                    let nx = x - dir.dx * step;
                    let ny = y - dir.dy * step;
                    if (nx >= 0 && ny >= 0 && nx < this.rows && ny < this.cols && this.cells[nx][ny].value === cell.value) {
                        count++;
                    } else break;
                }

                if (count >= 5) {
                    this.isOver = true;
                    setTimeout(() => alert("You win!!!"), 10);
                    return;
                }
            }
        }
    };
}

function play(x, y) {
    gameBoard.play(x, y);
}

function start() {
    gameBoard = createGameBoard(DEFAULT_ROWS, DEFAULT_COLS, "game-board");
    gameBoard.draw();
}
