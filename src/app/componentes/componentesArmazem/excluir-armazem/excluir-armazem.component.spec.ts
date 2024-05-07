import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirArmazemComponent } from './excluir-armazem.component';

describe('ExcluirArmazemComponent', () => {
  let component: ExcluirArmazemComponent;
  let fixture: ComponentFixture<ExcluirArmazemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirArmazemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirArmazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
