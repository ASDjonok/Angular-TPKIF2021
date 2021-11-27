import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import {MyModuleModule} from "./my-module/my-module.module";
import { SecondChildComponentComponent } from './second-child-component/second-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    SecondChildComponentComponent
  ],
  imports: [
    BrowserModule,
    MyModuleModule,
    // MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
