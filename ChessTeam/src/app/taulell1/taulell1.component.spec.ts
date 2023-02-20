import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taulell1Component } from './taulell1.component';

describe('Taulell1Component', () => {
  let component: Taulell1Component;
  let fixture: ComponentFixture<Taulell1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Taulell1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taulell1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
