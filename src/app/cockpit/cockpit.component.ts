import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  /*
    EventEmitter: Use by directives and components to emit custom Events.
    @Output([Alias]): Became a property "Listeneable". Pass something output the component.
  */
  @Output() serverCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  // ngOnInit manages the lifecycle component
  ngOnInit() {
  }

  onAddServer(inputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.serverContentInput.nativeElement.value = 'Something';
    this.blueprintCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
