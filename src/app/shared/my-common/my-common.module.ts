import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from '../pipes/pipes.module';
import {TranslateModule} from '@ngx-translate/core';
import {DirectivesModule} from '../directives/directives.module';
import {ExponentialModule} from '../../../../projects/exponential/src/lib/exponential.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ExponentialModule,
    DirectivesModule,
    TranslateModule
  ]
})
export class MyCommonModule { }
