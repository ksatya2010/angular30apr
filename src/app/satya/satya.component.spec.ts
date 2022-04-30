import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatyaComponent } from './satya.component';

describe('SatyaComponent', () => {
  let component: SatyaComponent;
  let fixture: ComponentFixture<SatyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
