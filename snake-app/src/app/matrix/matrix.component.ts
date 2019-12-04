import { Component, OnInit, HostListener } from '@angular/core';
import { SnakeService } from '../snake.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {


  constructor(private snakeService: SnakeService, private userService:UserService) {
    // setInterval(() => {
    //   snake.row = this.randomOf(this.rows.length);
    //   snake.column = this.randomOf(this.columns.length);
    // }, 1000)
  }

  ngOnInit() {
    this.userService.getProfile()
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



    // this.userService.getProfile();
