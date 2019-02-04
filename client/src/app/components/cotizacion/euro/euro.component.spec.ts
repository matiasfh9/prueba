import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { euroComponent } from './euro.component';

describe('EuroComponent', () => {
  let component: euroComponent;
  let fixture: ComponentFixture<euroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ euroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(euroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
