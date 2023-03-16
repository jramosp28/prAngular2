import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from 'src/app/services/service/service.component';
import { formMoto } from 'src/interfaces/interface';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  // @ViewChild('name') name!: ElementRef;
  // @ViewChild('lastName') lastName!: ElementRef;
  // @ViewChild('lastName2') lastName2!: ElementRef;
  // @ViewChild('email') email!: ElementRef;
  // @ViewChild('phone') phone!: ElementRef;
  // @ViewChild('address') address!: ElementRef;
  // @ViewChild('city') city!: ElementRef;
  // @ViewChild('zip') zip!: ElementRef;
  // @ViewChild('date') date!: ElementRef;
  // @ViewChild('bike') bike!: ElementRef;
  // @ViewChild('bikeModel') bikeModel!: ElementRef;

  MyNewForm!: FormGroup;

  constructor(private fb: FormBuilder, private formService: ServiceComponent) { }

  ngOnInit() {
    this.MyNewForm = this.fb.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      lastName2: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email, this.validateEmail]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]),
      date: new FormControl('', [Validators.required, this.validateDate]),
      bike: new FormControl('', Validators.required),
      bikeModel: new FormControl('', Validators.required)
    }
    );
  }

  validateEmail(control: AbstractControl): { [key: string]: any } | null {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const valid = emailRegex.test(control.value);
    return valid ? null : { 'invalidEmail': true };
  }

  validateDate(control: AbstractControl): { [key: string]: any } | null {
    const date = new Date(control.value);
    const valid = !isNaN(date.getTime());
    return valid ? null : { 'invalidDate': true };
  }

  onSubmit() {
    // console.log(this.MyNewForm.value);
    if (this.MyNewForm.valid){
      this.formService.clientes(this.MyNewForm.value)
      console.log(this.MyNewForm.value);
    }
  }


}
