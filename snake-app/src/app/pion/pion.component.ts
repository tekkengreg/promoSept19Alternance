import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pion',
  templateUrl: './pion.component.html',
  styleUrls: ['./pion.component.scss'],

})
export class PionComponent implements OnInit {

  @Input() position: any;
  constructor() { }

  ngOnInit() {
  }

}
