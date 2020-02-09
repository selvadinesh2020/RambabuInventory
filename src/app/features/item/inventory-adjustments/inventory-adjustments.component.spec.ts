import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdjustmentsComponent } from './inventory-adjustments.component';

describe('InventoryAdjustmentsComponent', () => {
  let component: InventoryAdjustmentsComponent;
  let fixture: ComponentFixture<InventoryAdjustmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAdjustmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
