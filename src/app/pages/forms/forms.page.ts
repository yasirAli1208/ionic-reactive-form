import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  public testForm: FormGroup;
  isSubmitted = false;
  printdata = '';
  constructor(
    private formBuilder:FormBuilder,
  ) {
    this.testForm = this.formBuilder.group({
      first_name:['', [Validators.required, Validators.minLength(3)]],
      last_name:['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone:['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
   }
   get f() {
    return this.testForm.controls;
  }
  ngOnInit() {
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.testForm.valid) {
      console.log('Please provide all the required values!')
      this.printdata = ''
      return false;
    } else {
      console.log(this.testForm.value)
      this.printdata = this.testForm.value
    }
  }
}
