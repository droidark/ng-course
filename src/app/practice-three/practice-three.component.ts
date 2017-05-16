import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-three',
  templateUrl: './practice-three.component.html',
  styleUrls: ['./practice-three.component.css']
})
export class PracticeThreeComponent implements OnInit {

  message: string = 'Hi, folks!';
  display: boolean = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  toggleMessage(){
    if(this.display){
      this.display = false;
    } else{
      this.display = true;
    }
    this.logs.push(1 + this.logs.length);

  }

}
