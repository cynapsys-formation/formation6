import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyCommonModule { }
