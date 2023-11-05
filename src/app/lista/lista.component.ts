import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {


  constructor(public datosService: DatosService) {}
}
