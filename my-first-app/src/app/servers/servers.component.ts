import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus:string = "Server is not created yet";
  serverName = 'TestServer';
  username = '';
  serverCreated = false;

  constructor() {
    this.allowServer()
  }

  ngOnInit(): void {
  }

  allowServer(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(e:any){
    this.serverName = e.target.value;
  }

  updateUsername(e:any){
    this.username = e.target.value;
  }

}
