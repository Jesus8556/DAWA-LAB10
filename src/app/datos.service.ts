import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }
  lista: { nombre: string, email: string }[] = [];
}
