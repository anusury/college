import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McseComponent } from './mcse.component';

describe('McseComponent', () => {
  let component: McseComponent;
  let fixture: ComponentFixture<McseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
