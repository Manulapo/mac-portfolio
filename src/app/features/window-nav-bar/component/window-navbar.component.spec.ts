import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowNavbarComponent } from './window-navbar.component';

describe('WindowNavbarComponent', () => {
  let component: WindowNavbarComponent;
  let fixture: ComponentFixture<WindowNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
