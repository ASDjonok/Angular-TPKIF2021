import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-second-child-component',
  templateUrl: './second-child-component.component.html',
  styleUrls: ['./second-child-component.component.css']
})
export class SecondChildComponentComponent implements OnInit {

  @Input() userName: string = "";

  // @Input() userAge: number = 0;
  _userAge: number = 0;

  @Input()
  set userAge(age:number) {
    if (age < 0)
      this._userAge = 0;
    else if (age > 100)
      this._userAge = 100;
    else
      this._userAge = age;
  }

  get userAge() { return this._userAge; }

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased:any) {
    this.onChanged.emit(increased);
  }

  name = "Test";

  constructor() { }

  ngOnInit(): void {
  }

}
