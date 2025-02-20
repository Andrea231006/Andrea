import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampadineComponent } from './lampadine.component';

describe('LampadineComponent', () => {
  let component: LampadineComponent;
  let fixture: ComponentFixture<LampadineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LampadineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LampadineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
