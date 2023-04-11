import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoIdComponent } from './demo-id.component';

describe('DemoIdComponent', () => {
  let component: DemoIdComponent;
  let fixture: ComponentFixture<DemoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
