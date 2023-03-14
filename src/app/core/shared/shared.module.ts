import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from './components/login-box/login-box.component';



@NgModule({
  declarations: [LoginBoxComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginBoxComponent
  ]
})
export class SharedModule { }
