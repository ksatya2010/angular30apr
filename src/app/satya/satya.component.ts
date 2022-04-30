import { Component, OnInit } from '@angular/core';
import{obj_interface} from '../interface_demo';
@Component({
  selector: 'app-satya',
  templateUrl: './satya.component.html',
  styleUrls: ['./satya.component.css']
})
export class SatyaComponent implements OnInit {
num_var:number;
num_var1:number=50;
string_var:string=" ";
string_x:string="rohini";
bool_z="true";
carray:number[]=[1,2,3,4];
carray1:string[]=["rohi","sat"];
array_num:number[]=[1,2,3,40];
array_string:string[]=["c","c++"];
Tsarray:[number,string]=[1,"c"];
carray2:Array<number>=[1,2,3,4,5];
objvar={
  id:1,
  name:"rohi"
}
objsat={
  id:3,
  name:"rohini"
}
object_declare:obj_interface;

  constructor() { 
    this.num_var=10;
    console.log(this.num_var);

    console.log(this.num_var);
    console.log(this.num_var1);
   
    console.log(this.bool_z);
    console.log(this.carray);
    console.log(this.carray1);
    console.log(this.array_num);
    console.log(this.array_string);
    console.log(this.Tsarray);
    console.log(this.carray);
    console.log(this.objvar);
    console.log(this.objsat.name);
    
     this.object_declare={
       name:"javascript",
       id:1,
     }
  }
  
  ngOnInit(): void {
  }

  sat(){
    this.string_var="hiii";
    console.log(this.string_var);

  }

}
