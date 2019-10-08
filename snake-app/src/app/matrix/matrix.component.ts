// import { Component, OnInit, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-matrix',
//   templateUrl: './matrix.component.html',
//   styleUrls: ['./matrix.component.scss']
// })
// export class MatrixComponent implements OnInit {
//   rows: number[] = new Array(10).fill(0);
//   columns: number[] = new Array(10).fill(0);
//   snake: { row: number, column: number } = {
//     row: 0,
//     column: 0,
//   }
//   constructor() {
//     // setInterval(() => {
//     //   snake.row = this.randomOf(this.rows.length);
//     //   snake.column = this.randomOf(this.columns.length);
//     // }, 1000)
//   }

//   ngOnInit() {
//   }

//   randomOf(unit) {
//     return Math.floor(Math.random() * unit)
//   }

//   isActiveCell(row: number, column: number) {
//     return row === snake.row && column === snake.column;
//   }

//   @HostListener('window:keyup', ['$event'])
//   keyEvent(event: KeyboardEvent) {
//     switch (event.key) {
//       case "ArrowUp":
//         snake.row--
//         if (snake.row < 0) snake.row = 0;
//         break;

//       case "ArrowDown":
//         snake.row++
//         if (snake.row > this.rows.length - 1) snake.row = this.rows.length - 1;
//         break;

//       case "ArrowLeft":
//         snake.column--
//         if (snake.column < 0) snake.column = 0;
//         break;

//       case "ArrowRight":
//         snake.column++
//         if (snake.column > this.columns.length - 1) snake.column = this.columns.length - 1;
//         break;


//       default:
//         break;
//     }
//     console.log('event', event);

//   }

// }



import { Component, OnInit, HostListener } from '@angular/core';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {


  constructor(private snakeService: SnakeService) {
    // setInterval(() => {
    //   snake.row = this.randomOf(this.rows.length);
    //   snake.column = this.randomOf(this.columns.length);
    // }, 1000)
  }

  ngOnInit() {
  }

  randomOf(unit) {
    return Math.floor(Math.random() * unit)
  }

  isActiveCell(row: number, column: number) {
    const { snake } = this.snakeService
    return row === snake.row && column === snake.column;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const { snake, updateSnakePosition } = this.snakeService;
    console.log(snake)
    updateSnakePosition(event.key)

  }

}
