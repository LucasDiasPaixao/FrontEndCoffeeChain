import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroArmazemComponent } from './cadastro-armazem.component';

describe('CadastroArmazemComponent', () => {
  let component: CadastroArmazemComponent;
  let fixture: ComponentFixture<CadastroArmazemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroArmazemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroArmazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
