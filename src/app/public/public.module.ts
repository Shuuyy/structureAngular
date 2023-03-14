import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './auth/login/container/login/login/login.component';


@NgModule({
  declarations: [PublicComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
