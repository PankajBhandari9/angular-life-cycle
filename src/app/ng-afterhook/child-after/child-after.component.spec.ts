import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAfterComponent } from './child-after.component';

describe('ChildAfterComponent', () => {
  let component: ChildAfterComponent;
  let fixture: ComponentFixture<ChildAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAfterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
