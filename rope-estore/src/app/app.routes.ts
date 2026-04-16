import { Routes } from '@angular/router';
import { Carrinho } from './pages/carrinho/carrinho';
import { Contato } from './pages/contato/contato';
import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'produtos', component: Produtos },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato },
  { path: 'carrinho', component: Carrinho },
  { path: '**', redirectTo: '' },
];
