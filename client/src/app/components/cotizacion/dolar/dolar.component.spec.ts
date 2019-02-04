import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dolarComponent } from './dolar.component';

describe('DolarComponent', () => {
  let component: dolarComponent;
  let fixture: ComponentFixture<dolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
