import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      visa: ['', [Validators.required, Validators.pattern(/^4[0-9]{12}(?:[0-9]{3})?$/)]],
      masterCard: ['', [Validators.required, Validators.pattern(/^5[1-5][0-9]{14}$/)]],
      americanExpress: ['', [Validators.required, Validators.pattern(/^3[47][0-9]{13}$/)]],
      discover: ['', [Validators.required, Validators.pattern(/^6(?:011|5[0-9]{2})[0-9]{12}$/)]],
      dinersClub: ['', [Validators.required, Validators.pattern(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/)]],
      jcb: ['', [Validators.required, Validators.pattern(/^(?:2131|1800|35\d{3})\d{11}$/)]],
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid) {
      console.log('Los datos del formulario son:', this.formulario.value);
    } else {
      console.log('Error');
    }
  }
}
