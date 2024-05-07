import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEntradaComponent } from './detalhes-entrada.component';

describe('DetalhesEntradaComponent', () => {
  let component: DetalhesEntradaComponent;
  let fixture: ComponentFixture<DetalhesEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
