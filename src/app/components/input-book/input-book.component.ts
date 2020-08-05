import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-input-book',
  templateUrl: './input-book.component.html',
  styleUrls: ['./input-book.component.css'],
})
export class InputBookComponent implements OnInit {
  bookForm: FormGroup;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [null, Validators.required],
      publicationYear: [null, Validators.required],
      language: [null, Validators.required],
      subject: [null, Validators.required],
    });
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
    console.log(children);
  }

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
  }
}
