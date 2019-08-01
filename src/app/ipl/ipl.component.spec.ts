import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPLComponent } from './ipl.component';

describe('IPLComponent', () => {
  let component: IPLComponent;
  let fixture: ComponentFixture<IPLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
