import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Book} from '../../shared/models/book';
import {BooksService} from '../books.service';
import {pipe} from 'rxjs';
import {map, mergeAll} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BooksPageComponent implements OnInit, OnDestroy {
  book: Book;
  books: Array<Book> = [];

  constructor(private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
      this.initData();
    this.book = {
      title: 'title',
      author: 'author'
    };
  }

  ngOnDestroy() {

  }

  gotToBookDetails(id: number) {
    this.router.navigate(['books/details', id]);
  }

  onSubmitForm(event) {
    this.booksService.saveBook(event).subscribe((data) => {
      this.initData();
    });
  }

  private initData() {
    this.books = [];
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
