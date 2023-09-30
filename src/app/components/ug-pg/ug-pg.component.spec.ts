import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgPgComponent } from './ug-pg.component';

describe('UgPgComponent', () => {
  let component: UgPgComponent;
  let fixture: ComponentFixture<UgPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UgPgComponent]
    });
    fixture = TestBed.createComponent(UgPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
