import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
var_name:string="hiii";
input_string:string="hello";
x:number=10;
var_n:number[]=[1,2,3,4,5];
col:string[]=["yellow","red","green","black"];
x1="data true";
x2="data false";
v_n:boolean=true;
  constructor() { 

}
  ngOnInit(): void {
  }
displaydata(){
  console.log(this.input_string);
}
add()
{
this.x+=1;
}

sub()
{
  this.x-=1;
}
buttonclick(){
  
  this.v_n=!this.v_n;
}

}