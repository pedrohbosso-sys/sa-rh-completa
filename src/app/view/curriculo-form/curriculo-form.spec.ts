import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoForm } from './curriculo-form';

describe('CurriculoForm', () => {
  let component: CurriculoForm;
  let fixture: ComponentFixture<CurriculoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
