import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BooksPageComponent implements OnInit, OnDestroy {
  book: Book;
  books: Array<Book> = [];

  constructor() { }

  ngOnInit() {
      this.initData();
  }

  ngOnDestroy() {

  }

  private initData() {
    this.book = {
      title: 'title',
      author: 'author'
    };
    this.books.push(this.book);
  }
}
