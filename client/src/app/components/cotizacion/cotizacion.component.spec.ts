import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cotizacionComponent } from './cotizacion.component';

describe('cotizacionComponent', () => {
  let component: cotizacionComponent;
  let fixture: ComponentFixture<cotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
