import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import {BooksService} from './books.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

import {MyCommonModule} from '../shared/my-common/my-common.module';
import {NotificationModule} from '../shared/components/notification/notification.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    MyCommonModule,

    NotificationModule
  ],
  declarations: [BooksPageComponent, BookDetailsComponent, BookFormComponent],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
