import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  book: Book;


  constructor() { }

  ngOnInit() {

    this.book = {
      title: 'title',
      author: 'author'
    };

  }

}
