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
  MyNewForm!: FormGroup;

  constructor(private fb: FormBuilder, private formService: ServiceComponent) { }

  ngOnInit() {
    this.MyNewForm = this.fb.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      lastName2: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      bike: new FormControl(false, Validators.required),
      bikeModel: new FormControl('', Validators.required)
    }
    );
  }

  onSubmit() {
    console.log(this.MyNewForm.value);
    if (this.MyNewForm.valid){
      this.formService.clientes(this.MyNewForm.value)
      console.log(this.MyNewForm.value);
    }
  }


}
