import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnakeService {
  rows: number[] = new Array(10).fill(0);
  columns: number[] = new Array(10).fill(0);
  snake: { row: number, column: number } = {
    row: 0,
    column: 0,
  }
  constructor() { }

  updateSnakePosition = (direction) => {
    const { snake } = this;
    switch (direction) {
      case "ArrowUp":
        snake.row--
        if (snake.row < 0) snake.row = 0;
        break;

      case "ArrowDown":
        snake.row++
        if (snake.row > this.rows.length - 1) snake.row = this.rows.length - 1;
        break;

      case "ArrowLeft":
        snake.column--
        if (snake.column < 0) snake.column = 0;
        break;

      case "ArrowRight":
        snake.column++
        if (snake.column > this.columns.length - 1) snake.column = this.columns.length - 1;
        break;


      default:
        break;
    }
  }
}
