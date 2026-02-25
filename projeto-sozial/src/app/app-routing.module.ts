import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CampanhasComponent } from './pages/campanhas/campanhas.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CampanhaDetalheComponent } from './pages/campanha-detalhe/campanha-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campanhas', component: CampanhasComponent },
  { path: 'campanhas/:id', component: CampanhaDetalheComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
