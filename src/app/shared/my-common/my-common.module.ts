import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class MyCommonModule { }
