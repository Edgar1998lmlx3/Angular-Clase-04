import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountryPagesComponent } from './by-country-pages.component';

describe('ByCountryPagesComponent', () => {
  let component: ByCountryPagesComponent;
  let fixture: ComponentFixture<ByCountryPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByCountryPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByCountryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
