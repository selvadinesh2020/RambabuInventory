import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeItemsComponent } from './composite-items.component';

describe('CompositeItemsComponent', () => {
  let component: CompositeItemsComponent;
  let fixture: ComponentFixture<CompositeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
