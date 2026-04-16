import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { QuantidadeSelector } from '../../components/quantidade-selector/quantidade-selector';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [CurrencyPipe, QuantidadeSelector],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  carrinhoService = inject(CarrinhoService);

  alterarQuantidade(produtoId: number, quantidade: number) {
    this.carrinhoService.atualizarQuantidade(produtoId, quantidade);
  }

  removerItem(produtoId: number) {
    this.carrinhoService.removerProduto(produtoId);
  }

  limpar() {
    this.carrinhoService.limparCarrinho();
  }
}
