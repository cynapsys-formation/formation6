import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import {BooksService} from './books.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ],
  declarations: [BooksPageComponent],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
