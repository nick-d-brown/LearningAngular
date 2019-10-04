import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `
    //<app-server></app-server>
    //<app-server></app-server>
    //<app-server></app-server>
  //`, //Showcasing the ability to write html in the ts file using template.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test';
  serverCreated = false;
  username = '';
  servers = ['TestServer', 'TestServer 2'];

  constructor() { 
    setTimeout(() => { 
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!! Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername(event){
    this.username = '';
  }

}
