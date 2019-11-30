import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlguilerPeliculaComponent } from './alguiler-pelicula.component';

describe('AlguilerPeliculaComponent', () => {
  let component: AlguilerPeliculaComponent;
  let fixture: ComponentFixture<AlguilerPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlguilerPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlguilerPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
