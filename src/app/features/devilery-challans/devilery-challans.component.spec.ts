import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevileryChallansComponent } from './devilery-challans.component';

describe('DevileryChallansComponent', () => {
  let component: DevileryChallansComponent;
  let fixture: ComponentFixture<DevileryChallansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevileryChallansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevileryChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
