import {enableProdMode, Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../shared/models/book';
import {environment} from '../../environments/environment';
import {Observable, ReplaySubject} from 'rxjs';
import {map, mergeAll} from 'rxjs/operators';

@Injectable()
export class BooksService {

  apiUrl = environment.apiUrl;
  private books$: ReplaySubject<any> = new ReplaySubject();


  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>>  {
    return this.http.get(this.apiUrl)  as Observable<Array<Book>>;
  }


  getBook(id: number) {
  //  return this.http.get(this.apiUrl + '/' + id);
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  saveBook(book: Book) {
    return this.http.post(this.apiUrl, book);
  }

  editBook(id: number, book: Book) {
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  get getBooks$() {
    this.getBooks().subscribe((data: any) => {
      this.books$.next(data);
    });
    return this.books$.asObservable();
  }

  set setBooks$(books: any) {
    this.books$.next(books);
  }

}
