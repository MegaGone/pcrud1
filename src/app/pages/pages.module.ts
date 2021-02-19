import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { HerosComponent } from './heros/heros.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    HerosComponent,
    EditComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [

  ]
})
export class PagesModule { }
