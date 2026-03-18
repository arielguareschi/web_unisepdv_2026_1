import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nome: string = 'Tiburso!';
  cargo: string = 'Desenvolvedor';
  fone: string = '(11) 9999-8888';
  endereco: string = 'Rua das Flores, 123';
  email: string = 'tiburso@exemplo.com';
}
