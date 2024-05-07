import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesArmazemComponent } from './detalhes-armazem.component';

describe('DetalhesArmazemComponent', () => {
  let component: DetalhesArmazemComponent;
  let fixture: ComponentFixture<DetalhesArmazemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesArmazemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesArmazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
