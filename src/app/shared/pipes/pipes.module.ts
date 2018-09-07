import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './fullname.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FullnamePipe],
  exports: [
   FullnamePipe
  ]
})
export class PipesModule { }
