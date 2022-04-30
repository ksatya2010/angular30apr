import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  col:string[]=["yellow","red","green","black"];
  var_name:string=" ";
  var_name1:string=" ";
  var_name2:string;
  var_name3:string=" ";
  var_name4:string=" ";
  constructor() { 
    console.log("satyaa hiiiiiii");
  }

  ngOnInit(): void {
    console.log("satyaa");
  }
submit(){}
reset(){}



 
}
