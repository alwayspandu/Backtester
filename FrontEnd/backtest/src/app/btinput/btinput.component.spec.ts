import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtinputComponent } from './btinput.component';

describe('BtinputComponent', () => {
  let component: BtinputComponent;
  let fixture: ComponentFixture<BtinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
