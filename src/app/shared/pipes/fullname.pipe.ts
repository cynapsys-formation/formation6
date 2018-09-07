import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../models/book';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Book, args?: any): any {
    return value.title + ' - ' + value.author;
  }

}
