import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import {BooksService} from './books.service';
import {HttpClientModule} from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BooksPageComponent, BookDetailsComponent, BookFormComponent],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
