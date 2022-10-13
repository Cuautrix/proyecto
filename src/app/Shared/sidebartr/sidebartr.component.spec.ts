import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartrComponent } from './sidebartr.component';

describe('SidebartrComponent', () => {
  let component: SidebartrComponent;
  let fixture: ComponentFixture<SidebartrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebartrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
