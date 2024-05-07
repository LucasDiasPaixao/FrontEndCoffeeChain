import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSaidaComponent } from './cadastro-saida.component';

describe('CadastroSaidaComponent', () => {
  let component: CadastroSaidaComponent;
  let fixture: ComponentFixture<CadastroSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroSaidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
