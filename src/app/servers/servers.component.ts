import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Testserver';

  constructor() {
    /* 2.24  Property Binding
      () => {} = function(){...}
      (arg1, arg2,... argN) => {function body} */
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  /* 2.26 Passing and using data with event bilding
    event: Recive the event of something HTML component. That event contains all
    data about that HTML component.
  */
  onUpdateServerName(event: Event) {
    // When you catch the event you can get all its properties such as the value
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
