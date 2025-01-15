import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class COmponente3Component {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      soloLetras: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      soloNumeros: ['', [Validators.required,Validators.pattern(/^[0-9]+$/)]],
      soloLetrasMayusculas: ['', [Validators.required,Validators.pattern(/^[A-Z]+$/)]],
      rangoNumerico: ['',[Validators.required,Validators.min(100),Validators.max(200)]],
      cincoDigitos: ['',[Validators.required,Validators.pattern(/^\d{5}$/)]],
      letras: ['',[Validators.required,Validators.pattern(/^[a-zA-Z]{10}$/)]],


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
