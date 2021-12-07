import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosJuegosComponent } from './nuevos-juegos.component';

describe('NuevosJuegosComponent', () => {
  let component: NuevosJuegosComponent;
  let fixture: ComponentFixture<NuevosJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevosJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
