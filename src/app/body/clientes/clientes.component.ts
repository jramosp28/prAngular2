import { Component } from '@angular/core';
import { formMoto } from 'src/interfaces/interface';
import { ServiceComponent } from '../../services/service/service.component'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  form: formMoto[] = []; 
  constructor(private ServiceComponent: ServiceComponent) { 

  } 
  ngOnInit(): void { 
    this.ServiceComponent.formularios$().subscribe(formulario => { this.form = formulario; }); 
  }
}
