import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo';
import { GRUPO_A, GRUPO_B, GRUPO_C, GRUPO_D } from '../mocks/mock-grupos';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  equipos: any[] = [];

  constructor() { }

  getGrupo(grupo: string): Equipo[]{
    switch(grupo) {
      case 'A':
        this.equipos = GRUPO_A;
        break;

      case 'B':
        this.equipos = GRUPO_B;
        break;

      case 'C':
        this.equipos = GRUPO_C;
        break;

      case 'D':
        this.equipos = GRUPO_D;
        break;
    }
    return this.equipos;
  }
}