import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampadinaComponent } from './lampadina.component';

describe('LampadinaComponent', () => {
  let component: LampadinaComponent;
  let fixture: ComponentFixture<LampadinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LampadinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LampadinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
