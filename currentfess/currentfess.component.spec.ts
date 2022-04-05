import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentfessComponent } from './currentfess.component';

describe('CurrentfessComponent', () => {
  let component: CurrentfessComponent;
  let fixture: ComponentFixture<CurrentfessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentfessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentfessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
