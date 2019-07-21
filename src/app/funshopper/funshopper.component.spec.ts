import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunshopperComponent } from './funshopper.component';

describe('FunshopperComponent', () => {
  let component: FunshopperComponent;
  let fixture: ComponentFixture<FunshopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunshopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunshopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
