import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './exponential.pipe';
import { FullnamePipe } from './fullname.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExponentialPipe, FullnamePipe],
  exports: [
    ExponentialPipe, FullnamePipe
  ]
})
export class PipesModule { }
