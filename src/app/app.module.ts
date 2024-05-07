import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutorComponent } from './pages/pagesProdutor/produtor/produtor.component';
import { CadastroComponent } from './pages/pagesProdutor/cadastroProdutor/cadastro.component';
import { ProdutorFormComponent } from './componentes/componentesProdutor/produtor-form/produtor-form.component';
import { EditarComponent } from './pages/pagesProdutor/editarProdutor/editar.component';
import { DetalhesComponent } from './pages/pagesProdutor/detalhesProdutor/detalhes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmpresaComponent } from './pages/pagesEmpresa/empresa/empresa.component';
import { EditarEmpresaComponent } from './pages/pagesEmpresa/editar-empresa/editar-empresa.component';
import { CadastroEmpresaComponent } from './pages/pagesEmpresa/cadastro-empresa/cadastro-empresa.component';
import { DetalhesEmpresaComponent } from './pages/pagesEmpresa/detalhes-empresa/detalhes-empresa.component';
import { EmpresaFormComponent } from './componentes/componentesEmpresa/empresa-form/empresa-form.component';
import { ExcluirEmpresaComponent } from './componentes/componentesEmpresa/excluir-empresa/excluir-empresa.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ExcluirComponent } from './componentes/componentesProdutor/excluirProdutor/excluir.component';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PropriedadeComponent } from './pages/pagesPropriedade/propriedade/propriedade.component';
import { EditarPropriedadeComponent } from './pages/pagesPropriedade/editar-propriedade/editar-propriedade.component';
import { CadastroPropriedadeComponent } from './pages/pagesPropriedade/cadastro-propriedade/cadastro-propriedade.component';
import { DetalhesPropriedadeComponent } from './pages/pagesPropriedade/detalhes-propriedade/detalhes-propriedade.component';
import { PropriedadeFormComponent } from './componentes/componentesPropriedade/propriedade-form/propriedade-form.component';
import { ExcluirPropriedadeComponent } from './componentes/componentesPropriedade/excluir-propriedade/excluir-propriedade.component';
import { MatListModule } from '@angular/material/list';
import { ArmazemFormComponent } from './componentes/componentesArmazem/armazem-form/armazem-form.component';
import { ExcluirArmazemComponent } from './componentes/componentesArmazem/excluir-armazem/excluir-armazem.component';
import { ArmazemComponent } from './pages/pagesArmazem/armazem/armazem.component';
import { EditarArmazemComponent } from './pages/pagesArmazem/editar-armazem/editar-armazem.component';
import { CadastroArmazemComponent } from './pages/pagesArmazem/cadastro-armazem/cadastro-armazem.component';
import { DetalhesArmazemComponent } from './pages/pagesArmazem/detalhes-armazem/detalhes-armazem.component';
import { EntradaComponent } from './pages/pagesEntrada/entrada/entrada.component';
import { CadastroEntradaComponent } from './pages/pagesEntrada/cadastro-entrada/cadastro-entrada.component';
import { DetalhesEntradaComponent } from './pages/pagesEntrada/detalhes-entrada/detalhes-entrada.component';
import { EditarEntradaComponent } from './pages/pagesEntrada/editar-entrada/editar-entrada.component';
import { EntradaFormComponent } from './componentes/componentesEntrada/entrada-form/entrada-form.component';
import { ExcluirEntradaComponent } from './componentes/componentesEntrada/excluir-entrada/excluir-entrada.component';
import { SaidaComponent } from './pages/pagesSaida/saida/saida.component';
import { ExcluirSaidaComponent } from './componentes/componentesSaida/excluir-saida/excluir-saida.component';
import { SaidaFormComponent } from './componentes/componentesSaida/saida-form/saida-form.component';
import { EditarSaidaComponent } from './pages/pagesSaida/editar-saida/editar-saida.component';
import { CadastroSaidaComponent } from './pages/pagesSaida/cadastro-saida/cadastro-saida.component';
import { DetalhesSaidaComponent } from './pages/pagesSaida/detalhes-saida/detalhes-saida.component';




@NgModule({
  declarations: [
    AppComponent,
    ProdutorComponent,
    CadastroComponent,
    ProdutorFormComponent,
    EditarComponent,
    DetalhesComponent,
    ExcluirComponent,
    HomeComponent,
    EmpresaComponent,
    EditarEmpresaComponent,
    CadastroEmpresaComponent,
    DetalhesEmpresaComponent,
    EmpresaFormComponent,
    ExcluirEmpresaComponent,
    PropriedadeComponent,
    EditarPropriedadeComponent,
    CadastroPropriedadeComponent,
    DetalhesPropriedadeComponent,
    PropriedadeFormComponent,
    ExcluirPropriedadeComponent,
    ArmazemFormComponent,
    ExcluirArmazemComponent,
    ArmazemComponent,
    EditarArmazemComponent,
    CadastroArmazemComponent,
    DetalhesArmazemComponent,
    EntradaComponent,
    CadastroEntradaComponent,
    DetalhesEntradaComponent,
    EditarEntradaComponent,
    EntradaFormComponent,
    ExcluirEntradaComponent,
    SaidaComponent,
    ExcluirSaidaComponent,
    SaidaFormComponent,
    EditarSaidaComponent,
    CadastroSaidaComponent,
    DetalhesSaidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
