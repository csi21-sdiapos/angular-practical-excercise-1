import { Injectable } from '@angular/core';
import { Jugador } from '../interfaces/jugador';
import { EQUIPO_1, EQUIPO_2, EQUIPO_3, EQUIPO_4 } from '../mocks/mock-equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor() { }

  getEquipo1(): Jugador[] {
    return EQUIPO_1;
  }
  getEquipo2(): Jugador[] {
    return EQUIPO_2;
  }
  getEquipo3(): Jugador[] {
    return EQUIPO_3;
  }
  getEquipo4(): Jugador[] {
    return EQUIPO_4;
  }
}
