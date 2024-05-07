import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPropriedadeComponent } from './excluir-propriedade.component';

describe('ExcluirPropriedadeComponent', () => {
  let component: ExcluirPropriedadeComponent;
  let fixture: ComponentFixture<ExcluirPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirPropriedadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
