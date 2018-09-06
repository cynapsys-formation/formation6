import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

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


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['']
    });
  }

  onSubmit() {
    console.log('onSubmit', this.bookForm);
    this.submitedBook.emit(this.bookForm.value);
  }

}
