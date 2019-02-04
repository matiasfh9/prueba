import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { realComponent } from './real.component';

describe('RealComponent', () => {
  let component: realComponent;
  let fixture: ComponentFixture<realComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ realComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(realComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
