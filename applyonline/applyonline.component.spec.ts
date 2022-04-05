import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyonlineComponent } from './applyonline.component';

describe('ApplyonlineComponent', () => {
  let component: ApplyonlineComponent;
  let fixture: ComponentFixture<ApplyonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
