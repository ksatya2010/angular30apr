import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

// let x:number=5;
export class AppComponent {
  title = 'classinitial';
  name: number;

  value1 !: string;
  string: string = "test";
  arr: string[] = [];
  tuple: [string, number] = ['test', 1];
  newword: any;

  // tup : [];
  // tup[0] =220;
  // console.log(tup);7


  mytuple: [string, number];
  test() {
    // mytuple=[string,number];




    this.mytuple[0] = "string";
    this.mytuple[1] = 234;
    console.log(this.mytuple);
  }

  updatename() {
    this.newword = "test";
    console.log(this.newword);
    let result: string = this.add(1, 2);
    console.log(result);

  }
  private add(a: number, b: number): string {
    let result: number = a + b;
    return result.toString();

  }

}

