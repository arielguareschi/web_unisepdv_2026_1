import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../models/produto';
import { ResumoPipe } from '../../pipes/resumo-pipe';
import { QuantidadeSelector } from '../quantidade-selector/quantidade-selector';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, NgClass, ResumoPipe, QuantidadeSelector],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() produto!: Produto;
  @Output() adicionar = new EventEmitter<{
    produto: Produto;
    quantidade: number;
  }>();

  quantidadeSelecionada: number = 1;

  addCarrinho() {
    if (!this.produto.ativo) return;
    this.adicionar.emit({
      produto: this.produto,
      quantidade: this.quantidadeSelecionada,
    });

    this.quantidadeSelecionada = 1;
  }

  atualizarQuantidade(nova: number) {
    this.quantidadeSelecionada = nova;
  }
}
