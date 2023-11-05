import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DatosService } from '../datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = "";
  email: string = "";

  constructor(public datosService:DatosService, private router:Router){
    const storedData = localStorage.getItem('lista');
    if (storedData) {
      this.datosService.lista = JSON.parse(storedData);
    }
  }

  onSubmit() {
    Swal.fire({
      title: 'Confirmacion',
      text: "Estas seguro de enviar el formulario?",
      icon: 'warning',
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.datosService.lista.push({ nombre: this.nombre, email: this.email });
        localStorage.setItem('lista', JSON.stringify(this.datosService.lista));
        console.log('Formulario enviado');
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Email: ${this.email}`);
  
        Swal.fire(
          'Agregado!',
          'Los datos fueron agregados.',
          'success'
        );
        this.router.navigate(['/']);
      }

    })

  }

}
