import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {Book} from '../../shared/models/book';
import {map, mergeAll} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private booksService: BooksService,
              private  activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      const id = +params['idBook'];
       this.getBook(id);
    });
  }

  private getBook(id: number) {
    this.booksService.getBook(id)
      .pipe(
        map((data: Book) => {
          this.book = data;
        })
      )
      .subscribe(() => {}, error1 => {
        console.log('error', error1);
      });
  }

}
