import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgonchangesComponent } from './child-ngonchanges.component';

describe('ChildNgonchangesComponent', () => {
  let component: ChildNgonchangesComponent;
  let fixture: ComponentFixture<ChildNgonchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgonchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNgonchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
