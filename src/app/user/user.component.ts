import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
btnStatus:boolean=false;
name1:string;
users:string[]=[];
name:string;
   constructor() { 
this.name="user";

this.togglebtnStatus();

}
togglebtnStatus(){
  setTimeout(()=>this.btnStatus=true,3000);
}
updatename(event:any){
  this.name=event.target.value;
}
createUser1(name1:string){
  if(this.name1 !=''){
    console.log(typeof this.users);
    this.users.push(name1);
    this.name1='';
  }
  console.log(this.users);
}
  ngOnInit(): void {
  }

}
