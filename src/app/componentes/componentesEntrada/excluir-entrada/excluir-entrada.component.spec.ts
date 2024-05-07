import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirEntradaComponent } from './excluir-entrada.component';

describe('ExcluirEntradaComponent', () => {
  let component: ExcluirEntradaComponent;
  let fixture: ComponentFixture<ExcluirEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
