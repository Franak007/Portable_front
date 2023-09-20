import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortableComponent } from './portable.component';

describe('PortableComponent', () => {
  let component: PortableComponent;
  let fixture: ComponentFixture<PortableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortableComponent]
    });
    fixture = TestBed.createComponent(PortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
