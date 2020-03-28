import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingTrolleyComponent } from './shopping-trolley.component';

describe('ShoppingTrolleyComponent', () => {
  let component: ShoppingTrolleyComponent;
  let fixture: ComponentFixture<ShoppingTrolleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingTrolleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingTrolleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
