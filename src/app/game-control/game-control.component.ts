import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  func;
  numbersArray = [];
  countNumber: number = 0;
  @Output() numberCreated = new EventEmitter<{nummer: number, type: string}>();

  constructor() { }

  ngOnInit() { }

  startCounter() {
    this.func = setInterval(() => {this.countNumber++}, 1000);
  }

  stopCounter() {
    this.func = clearInterval(this.func)
    this.numberCreated.emit({
      nummer: this.countNumber,
      type: this.countNumber % 2 === 0 ? 'even' : 'odd'
    });
    // this.numbersArray.push({
    //   nummer: this.countNumber,
    //   type: this.countNumber % 2 === 0 ? 'even' : 'odd'
    // });
    this.countNumber = 0;
  }
}
