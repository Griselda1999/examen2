import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallatresComponent } from './pantallatres.component';

describe('PantallatresComponent', () => {
  let component: PantallatresComponent;
  let fixture: ComponentFixture<PantallatresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallatresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
