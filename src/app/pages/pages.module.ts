import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HerosComponent } from './heros/heros.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    HerosComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HerosComponent,
    EditComponent
  ]
})
export class PagesModule { }
