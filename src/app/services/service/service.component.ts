import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { formMoto } from 'src/interfaces/interface';

export class ServiceComponent {
  private objeto: formMoto[];
  private view$: Subject<formMoto[]>

  constructor() {
    this.objeto = [];
    this.view$ = new BehaviorSubject<formMoto[]>([]);
  }
  formularios$():
    Observable<formMoto[]> {
    return this.view$.asObservable();
    console.log(this.view$.asObservable());
  }
  clientes(formulario: formMoto) {
    this.objeto.push(formulario);
    this.view$.next(this.objeto);
  }
}
