import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverWasCreated = false;
  newServerName = 'Test Name';
  servers = ['Alpha Server', 'Beta Server']

  constructor() {
    setTimeout(() => this.allowNewServer=true,1000);
  }

  ngOnInit() {
  }

  createServer() {
    this.serverWasCreated = true;
    this.servers.push(this.newServerName);
  }

  updateServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  }

}
