import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverStatus: string;
  
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'up' : 'down';
  }

  ngOnInit(): void {
  }

  getColor(){
    console.log(this.serverStatus);
    return this.serverStatus === 'up' ? 'green' : 'red';
  }

}
