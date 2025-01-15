import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      correo: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      cargo: ['', Validators.required],
      salario: ['', [Validators.required, Validators.min(900), Validators.max(1200)]],
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
