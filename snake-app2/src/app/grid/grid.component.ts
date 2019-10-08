import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  rows: number[] = new Array(10).fill(0);
  columns: number[] = new Array(15).fill(0);

  snake: { row: number, column: number } = {
    row: 0,
    column: 0
  }
  constructor() {
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.snake.row = this.randomOf(this.rows.length);
    //   this.snake.column = this.randomOf(this.columns.length);
    // }, 1000)
  }

  randomOf(unit) {
    return Math.floor(Math.random() * unit)
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowDown":
        this.snake.row++
        if (this.snake.row > this.rows.length - 1) this.snake.row = this.rows.length - 1;
        break;
      case "ArrowUp":
        this.snake.row--
        if (this.snake.row < 0) this.snake.row = 0;
        break;
      case "ArrowLeft":
        this.snake.column--
        if (this.snake.column < 0) this.snake.column = 0;
        break;
      case "ArrowRight":
        this.snake.column++
        if (this.snake.column > this.columns.length - 1) this.snake.column = this.columns.length - 1;
        break;

      default:
        break;
    }
  }

  isActiveCell(row, column) {
    return row === this.snake.row && column === this.snake.column;
  }

}
