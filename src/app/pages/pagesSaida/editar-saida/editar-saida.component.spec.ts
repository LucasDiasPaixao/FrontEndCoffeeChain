import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSaidaComponent } from './editar-saida.component';

describe('EditarSaidaComponent', () => {
  let component: EditarSaidaComponent;
  let fixture: ComponentFixture<EditarSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSaidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
