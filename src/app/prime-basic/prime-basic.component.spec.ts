import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeBasicComponent } from './prime-basic.component';

describe('PrimeBasicComponent', () => {
  let component: PrimeBasicComponent;
  let fixture: ComponentFixture<PrimeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
