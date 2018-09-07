import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Book} from '../../shared/models/book';
import {BooksService} from '../books.service';
import {Observable, pipe} from 'rxjs';
import {map, mergeAll} from 'rxjs/operators';
import {Router} from '@angular/router';
import {NotificationService} from '../../shared/services/notification.service';


@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BooksPageComponent implements OnInit, OnDestroy {
  book: Book;
  books: Array<Book> = [];
  message: string;

  books$: Observable<Array<Book>>;

  constructor(private booksService: BooksService,
              private notificationService: NotificationService,
              private router: Router) {

    notificationService.getMessage.subscribe(data => {
      this.message = data;
    });

  }

  ngOnInit() {
      this.initData();
    this.book = {
      id: 3,
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
    this.booksService.saveBook(event).subscribe(() => {
      this.initData();
      this.notificationService.setMessage = 'new book is saved';
    });
  }

  private initData() {
    this.books = [];

    /*
    this.booksService.getBooks()
      .pipe(
        mergeAll(),
        map(data => {
            this.books.push(data);
       })
      )
      .subscribe();
      */
      this.books$ =  this.booksService.getBooks$;

    //  this.booksService.setBooks$ = [this.book];

     this.booksService.getBooks$.subscribe((data: any) => {
       console.log('getBooks$', data);
       this.books = data;
     });
  }
}
