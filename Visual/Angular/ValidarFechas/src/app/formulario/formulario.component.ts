import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  igualPwd!: boolean;
  FRegistro!: FormGroup;
  fechaValida!: boolean;

  //La validación se realiza en el constructor campo a campo
  constructor(private fb: FormBuilder) {
    //Se utiliza el objeto Fregistro
    this.FRegistro = this.fb.group({
      //tiene que cumplir requisitos de mail
      email: ['', [Validators.required, Validators.email]],
      //una fecha valida anterior a la de hoy
      cumple: ['', [Validators.required]],
      //una lista de elementos fijos (tester,fullstack,front...)
      trabajo: ['', [Validators.required]],
      //8 caracteres alfanuméricos: Empieza por letra mayúscula
      //7 números más a continuación
      password: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z0-9]{7}$/)]],
      //Coinciden las password
      repeatPassword: ['', [Validators.required]]
    }, { validators: this.comprobarIgualdadPassword });
  }

  comprobarIgualdadPassword(fgroup: FormGroup): void {
    const p1 = fgroup.get('password')?.value;
    const p2 = fgroup.get('repeatPassword')?.value;

    // Validar si las contraseñas coinciden
    this.igualPwd = p1 && p2 && p1 === p2;

    // Validar si la fecha es válida y anterior a hoy
    const fechaActual = new Date();
    const cumpleValue = fgroup.get('cumple')?.value;

    if (cumpleValue) {
      const cumpleDate = new Date(cumpleValue);
      this.fechaValida = cumpleDate < fechaActual;
    } else {
      this.fechaValida = false;
    }
  }

  comprobar(): void {
    // Validar formulario completo
    if (this.FRegistro.valid && this.igualPwd && this.fechaValida) {
      alert('Formulario válido');
    } else {
      alert('Formulario inválido. Revisa los campos.');
    }
  }
}
