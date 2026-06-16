import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoDetail } from './curriculo-detail';

describe('CurriculoDetail', () => {
  let component: CurriculoDetail;
  let fixture: ComponentFixture<CurriculoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculoDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
