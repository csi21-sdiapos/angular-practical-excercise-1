import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../interfaces/jugador';

@Component({
  selector: 'app-detalles-jugadores',
  templateUrl: './detalles-jugadores.component.html',
  styleUrls: ['./detalles-jugadores.component.css']
})
export class DetallesJugadoresComponent implements OnInit {

  @Input() jugador?: Jugador;

  constructor() { }

  ngOnInit(): void {
  }

}
