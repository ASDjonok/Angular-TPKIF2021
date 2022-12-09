import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello World!</h1>',
  styleUrls: ['./app.component.css']/*,
  template: `<p>Привет {{name}}</p>
                <input type="text" [(ngModel)]="name" /> <br><br>
                <input type="text" [(ngModel)]="name" />`*/
})
export class AppComponent {
  title = 2;
  text = "Hello world!!!!";
  condition = false;
  items = ["i1", "i2", "i3"];
  // name = "Tom";
  colspan = 2;
  count: number = 0;
  name: string = "Tom";
  age:number = 24;
  // initialInputValue: number = 124;
  initialInputValue: string = "125";

  increase(): void {
    this.count++;
  }

  increase2($event: any): void {
    this.count++;
    console.log($event);
  }

  toggle() {
    console.log("in toggle!");
    this.text = "Bye world!";
    this.condition = !this.condition;
    let a/*:String*/;
    a = "ASD";
    console.log("a", a);
    a = 2;
    console.log("a", a);
  }
}
