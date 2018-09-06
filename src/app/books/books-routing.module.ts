import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksPageComponent} from './books-page/books-page.component';
import {BookDetailsComponent} from './book-details/book-details.component';

const routes: Routes = [
  { path: '', component: BooksPageComponent },
  { path: 'details/:idBook', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
