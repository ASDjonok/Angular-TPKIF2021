import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentInMyModelComponent } from './my-component-in-my-model/my-component-in-my-model.component';



@NgModule({
  declarations: [
    MyComponentInMyModelComponent
  ],
  exports: [
    MyComponentInMyModelComponent
  ],
  /*exports: [
    MyComponentInMyModelComponent
  ],*/
  imports: [
    CommonModule
  ]
})
export class MyModuleModule { }
