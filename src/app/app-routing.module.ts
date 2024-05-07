import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/pagesProdutor/cadastroProdutor/cadastro.component';
import { ProdutorComponent } from './pages/pagesProdutor/produtor/produtor.component';
import { EditarComponent } from './pages/pagesProdutor/editarProdutor/editar.component';
import { DetalhesComponent } from './pages/pagesProdutor/detalhesProdutor/detalhes.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpresaComponent } from './pages/pagesEmpresa/empresa/empresa.component';
import { DetalhesEmpresaComponent } from './pages/pagesEmpresa/detalhes-empresa/detalhes-empresa.component';
import { EditarEmpresaComponent } from './pages/pagesEmpresa/editar-empresa/editar-empresa.component';
import { CadastroEmpresaComponent } from './pages/pagesEmpresa/cadastro-empresa/cadastro-empresa.component';
import { PropriedadeComponent } from './pages/pagesPropriedade/propriedade/propriedade.component';
import { CadastroPropriedadeComponent } from './pages/pagesPropriedade/cadastro-propriedade/cadastro-propriedade.component';
import { EditarPropriedadeComponent } from './pages/pagesPropriedade/editar-propriedade/editar-propriedade.component';
import { DetalhesPropriedadeComponent } from './pages/pagesPropriedade/detalhes-propriedade/detalhes-propriedade.component';
import { ArmazemComponent } from './pages/pagesArmazem/armazem/armazem.component';
import { CadastroArmazemComponent } from './pages/pagesArmazem/cadastro-armazem/cadastro-armazem.component';
import { EditarArmazemComponent } from './pages/pagesArmazem/editar-armazem/editar-armazem.component';
import { DetalhesArmazemComponent } from './pages/pagesArmazem/detalhes-armazem/detalhes-armazem.component';
import { SaidaComponent } from './pages/pagesSaida/saida/saida.component';
import { CadastroSaidaComponent } from './pages/pagesSaida/cadastro-saida/cadastro-saida.component';
import { EditarSaidaComponent } from './pages/pagesSaida/editar-saida/editar-saida.component';
import { DetalhesSaidaComponent } from './pages/pagesSaida/detalhes-saida/detalhes-saida.component';
import { EntradaComponent } from './pages/pagesEntrada/entrada/entrada.component';
import { CadastroEntradaComponent } from './pages/pagesEntrada/cadastro-entrada/cadastro-entrada.component';
import { EditarEntradaComponent } from './pages/pagesEntrada/editar-entrada/editar-entrada.component';
import { DetalhesEntradaComponent } from './pages/pagesEntrada/detalhes-entrada/detalhes-entrada.component';

const routes: Routes = [
  {path: 'produtor/cadastro' , component: CadastroComponent},
  {path: 'produtor' , component: ProdutorComponent},
  {path: 'produtor/editar/:id' , component: EditarComponent},
  {path: 'produtor/detalhes/:id' , component: DetalhesComponent},
  {path: '' , component: HomeComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'empresa/detalhes/:id', component: DetalhesEmpresaComponent},
  {path: 'empresa/editar/:id', component: EditarEmpresaComponent},
  {path: 'empresa/cadastro', component: CadastroEmpresaComponent},
  {path: 'propriedade', component: PropriedadeComponent},
  {path: 'propriedade/cadastro', component: CadastroPropriedadeComponent},
  {path: 'propriedade/editar/:id', component: EditarPropriedadeComponent},
  {path: 'propriedade/detalhes/:id', component: DetalhesPropriedadeComponent},
  {path: 'armazem', component: ArmazemComponent},
  {path: 'armazem/cadastro', component: CadastroArmazemComponent},
  {path: 'armazem/editar/:id', component: EditarArmazemComponent},
  {path: 'armazem/detalhes/:id', component: DetalhesArmazemComponent},
  {path: 'saida', component: SaidaComponent},
  {path: 'saida/cadastro', component: CadastroSaidaComponent},
  {path: 'saida/editar/:id', component: EditarSaidaComponent},
  {path: 'saida/detalhes/:id', component: DetalhesSaidaComponent},
  {path: 'entrada', component: EntradaComponent},
  {path: 'entrada/cadastro', component: CadastroEntradaComponent},
  {path: 'entrada/editar/:id', component: EditarEntradaComponent},
  {path: 'entrada/detalhes/:id', component: DetalhesEntradaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
