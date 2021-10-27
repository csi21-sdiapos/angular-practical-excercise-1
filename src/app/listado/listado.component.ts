import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GruposService } from '../services/grupo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listaEquipos: any[] = [];

  constructor(
    private grupoService: GruposService,
    private ruta: ActivatedRoute
  ) { } // inyectando el servicio

  ngOnInit(): void {
    let grupo = this.ruta.snapshot.params.grupo;
    // this.listaEquipos = this.grupoService.getGrupo('A');
    this.listaEquipos = this.grupoService.getGrupo(grupo);
  }

}