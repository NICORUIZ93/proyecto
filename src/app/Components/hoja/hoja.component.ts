import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoja',
  templateUrl: './hoja.component.html',
  styleUrls: ['./hoja.component.css'],
})
export class HojaComponent implements OnInit {
  Dseleccion: number;

  constructor() {}
  ngOnInit(): void {}

  datos(recibido: number): void {
    this.Dseleccion = recibido;
  }
}
