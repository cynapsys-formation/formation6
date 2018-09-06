import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Book} from '../../shared/models/book';
import {BooksService} from '../books.service';
import {pipe} from 'rxjs';
import {map, mergeAll} from 'rxjs/operators';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BooksPageComponent implements OnInit, OnDestroy {
  book: Book;
  books: Array<Book> = [];

  constructor(private booksService: BooksService) { }

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

    this.booksService.getBooks()
      .pipe(
        mergeAll(),
        map(data => {
            this.books.push(data);
       })
      )
      .subscribe();
  }
}
