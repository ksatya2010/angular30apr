import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component implements OnInit {
k:string="hiiii this is";
l:number=70;
m:number=189.69;
datestring=new Date("2022-08-19");
n1:string="angular";

  constructor() { 
   
  }

  ngOnInit(): void {
    
  }

}
