import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOninitComponent } from './ng-oninit.component';

describe('NgOninitComponent', () => {
  let component: NgOninitComponent;
  let fixture: ComponentFixture<NgOninitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOninitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
