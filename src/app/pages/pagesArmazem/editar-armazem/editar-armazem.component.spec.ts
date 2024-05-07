import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArmazemComponent } from './editar-armazem.component';

describe('EditarArmazemComponent', () => {
  let component: EditarArmazemComponent;
  let fixture: ComponentFixture<EditarArmazemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarArmazemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarArmazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
