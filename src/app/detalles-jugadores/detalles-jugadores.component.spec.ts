import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJugadoresComponent } from './detalles-jugadores.component';

describe('DetallesJugadoresComponent', () => {
  let component: DetallesJugadoresComponent;
  let fixture: ComponentFixture<DetallesJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesJugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
