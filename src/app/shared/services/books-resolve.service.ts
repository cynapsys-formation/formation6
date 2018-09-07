import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BooksService} from '../../books/books.service';

@Injectable({
  providedIn: 'root'
})
export class BooksResolveService implements Resolve<any> {

  constructor(private booksService: BooksService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.booksService.getBooks$;
  }
}
