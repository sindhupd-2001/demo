import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconvertorComponent } from './currencyconvertor.component';

describe('CurrencyconvertorComponent', () => {
  let component: CurrencyconvertorComponent;
  let fixture: ComponentFixture<CurrencyconvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyconvertorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyconvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
