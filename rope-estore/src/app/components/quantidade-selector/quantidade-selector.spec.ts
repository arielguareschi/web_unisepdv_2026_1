import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeSelector } from './quantidade-selector';

describe('QuantidadeSelector', () => {
  let component: QuantidadeSelector;
  let fixture: ComponentFixture<QuantidadeSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantidadeSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantidadeSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
