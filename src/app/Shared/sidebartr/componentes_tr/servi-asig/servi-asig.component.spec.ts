import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiAsigComponent } from './servi-asig.component';

describe('ServiAsigComponent', () => {
  let component: ServiAsigComponent;
  let fixture: ComponentFixture<ServiAsigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiAsigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
