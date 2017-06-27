import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersElements = [];

  onNumberAdded(numberData: {nummer: number, type: string}) {
    this.numbersElements.push({
      nummer: numberData.nummer,
      type: numberData.type
    });
  }

  // onBlueprintAdded(numberData: {nummer: number, type: string}) {
  //   this.numbersElements.push({
  //     nummer: numberData.nummer,
  //     content: numberData.type
  //   });
  // }

  // OnChangeFirst() {
  //   this.serverElements[0].name = 'Changed!';
  // }
  //
  // OnDestroyFirst() {
  //   this.serverElements.splice(0, 1)
  // }
}
