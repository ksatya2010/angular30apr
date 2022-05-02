import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

btnStatus:boolean=false;
name1:any[]= ['satya','rohini'];
@Output() userCreated = new  EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
createUser1(){
this.userCreated.emit(this.name1);
// this.name1='';
}

}
