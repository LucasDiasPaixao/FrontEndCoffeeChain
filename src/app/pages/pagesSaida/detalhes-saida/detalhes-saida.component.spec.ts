import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesSaidaComponent } from './detalhes-saida.component';

describe('DetalhesSaidaComponent', () => {
  let component: DetalhesSaidaComponent;
  let fixture: ComponentFixture<DetalhesSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesSaidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
