import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-two',
  templateUrl: './practice-two.component.html',
  styleUrls: ['./practice-two.component.css']
})
export class PracticeTwoComponent implements OnInit {
  username: string = '';
  enableButton = false;

  constructor() { }

  ngOnInit() {
  }

  getEnableButton(){
    if(this.username.length > 0){
      return this.enableButton = true;
    }
  }

  resetUsername(){
    this.username = '';
  }



}
