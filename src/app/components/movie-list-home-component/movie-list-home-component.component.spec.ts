import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListHomeComponentComponent } from './movie-list-home-component.component';

describe('MovieListHomeComponentComponent', () => {
  let component: MovieListHomeComponentComponent;
  let fixture: ComponentFixture<MovieListHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
