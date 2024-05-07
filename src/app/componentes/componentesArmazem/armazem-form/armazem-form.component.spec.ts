import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmazemFormComponent } from './armazem-form.component';

describe('ArmazemFormComponent', () => {
  let component: ArmazemFormComponent;
  let fixture: ComponentFixture<ArmazemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArmazemFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmazemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
