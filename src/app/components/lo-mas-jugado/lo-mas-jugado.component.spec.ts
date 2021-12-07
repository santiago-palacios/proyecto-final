import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoMasJugadoComponent } from './lo-mas-jugado.component';

describe('LoMasJugadoComponent', () => {
  let component: LoMasJugadoComponent;
  let fixture: ComponentFixture<LoMasJugadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoMasJugadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoMasJugadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
