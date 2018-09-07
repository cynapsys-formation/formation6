import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Output() submitedBook = new EventEmitter();

 // title: FormControl;
  // author: FormControl;
  bookForm: FormGroup;
  message: string;


  constructor(private fb: FormBuilder,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['']
    });

    this.notificationService.getMessage.subscribe(data => {
      this.message = data;
    });
  }

  onSubmit() {
    console.log('onSubmit', this.bookForm);
    this.submitedBook.emit(this.bookForm.value);
  }

}
