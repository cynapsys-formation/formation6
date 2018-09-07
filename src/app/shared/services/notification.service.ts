import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NotificationService {

  private subject$: ReplaySubject<string> = new ReplaySubject();

  constructor() {
    this.subject$.next('default message');
  }

  get getMessage() {
    return this.subject$.asObservable();
  }

  set setMessage(message: string) {
     this.subject$.next(message);
  }

}
