import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterhookComponent } from './ng-afterhook.component';

describe('NgAfterhookComponent', () => {
  let component: NgAfterhookComponent;
  let fixture: ComponentFixture<NgAfterhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAfterhookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAfterhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
