import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  slogan: string = 'A melhor loja de calcinhas do Brasil';
  numero: number = 0;
  desabilitado: boolean = false;

  incrementar() {
    this.numero++;
    if (this.numero >= 10) {
      this.desabilitado = true;
      alert('Ta bom já');
    }
  }

  mostrarMensagem(msg: string) {
    alert(msg);
  }
}
