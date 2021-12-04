import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import {MyModuleModule} from "./my-module/my-module.module";
import { SecondChildComponentComponent } from './second-child-component/second-child-component.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    SecondChildComponentComponent
  ],
  imports: [
    BrowserModule,
    MyModuleModule,
    FormsModule
    // MyModuleModule
  ],
  providers: [/*FormsModule*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
