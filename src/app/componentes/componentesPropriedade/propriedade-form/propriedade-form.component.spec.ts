import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeFormComponent } from './propriedade-form.component';

describe('PropriedadeFormComponent', () => {
  let component: PropriedadeFormComponent;
  let fixture: ComponentFixture<PropriedadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropriedadeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropriedadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
