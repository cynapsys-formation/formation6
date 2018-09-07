import { NgModule } from '@angular/core';
import { ExponentialComponent } from './exponential.component';
import {ExponentialPipe} from './exponential.pipe';

@NgModule({
  imports: [
  ],
  declarations: [ExponentialComponent, ExponentialPipe],
  exports: [ExponentialComponent, ExponentialPipe]
})
export class ExponentialModule { }
