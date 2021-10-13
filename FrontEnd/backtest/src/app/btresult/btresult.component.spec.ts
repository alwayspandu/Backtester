import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtresultComponent } from './btresult.component';

describe('BtresultComponent', () => {
  let component: BtresultComponent;
  let fixture: ComponentFixture<BtresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
