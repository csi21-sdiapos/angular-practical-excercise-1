import { Component, OnInit } from '@angular/core';
import { Jugador } from '../interfaces/jugador';
import { EQUIPO_1, EQUIPO_2, EQUIPO_3, EQUIPO_4 } from '../mocks/mock-equipos';
import { EquipoService } from '../services/equipo.service';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  // para seleccionar un solo jugador de un equipo
  selectedJugador?: Jugador;
  onSelect(jugador: Jugador): void {
    this.selectedJugador = jugador;
  }

  // equipo_1 = EQUIPO_1;
  // equipo_2 = EQUIPO_2;
  // equipo_3 = EQUIPO_3;
  // equipo_4 = EQUIPO_4;

  equipos: Jugador[] = [];

  constructor(private equipoService: EquipoService) { }

  getEquipos(){
    this.equipos = this.equipoService.getEquipo1();
    this.equipos = this.equipoService.getEquipo2();
    this.equipos = this.equipoService.getEquipo3();
    this.equipos = this.equipoService.getEquipo4();
  }

  ngOnInit(): void {
    this.getEquipos();
  }

}
