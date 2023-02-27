import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesboardComponent } from './cheesboard.component';

describe('CheesboardComponent', () => {
  let component: CheesboardComponent;
  let fixture: ComponentFixture<CheesboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheesboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheesboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
