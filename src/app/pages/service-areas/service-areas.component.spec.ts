import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAreasComponent } from './service-areas.component';

describe('ServiceAreasComponent', () => {
  let component: ServiceAreasComponent;
  let fixture: ComponentFixture<ServiceAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAreasComponent]
    });
    fixture = TestBed.createComponent(ServiceAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
