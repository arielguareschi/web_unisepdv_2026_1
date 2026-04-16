import { computed, Injectable, signal } from '@angular/core';
import { CarrinhoItem } from '../models/carrinho-item';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinhoSignal = signal<CarrinhoItem[]>([]);

  itens = computed(() => this.carrinhoSignal());

  totalItens = computed(() =>
    this.carrinhoSignal().reduce((total, item) => total + item.quantidade, 0),
  );

  totalValor = computed(() =>
    this.carrinhoSignal().reduce((total, item) => total + item.subtotal, 0),
  );

  adicionarProduto(produto: Produto, quantidade: number) {
    if (quantidade <= 0) return;

    const carrinhoAtual = [...this.carrinhoSignal()];
    const itemExistente = carrinhoAtual.find((item) => item.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
      itemExistente.subtotal = itemExistente.quantidade * itemExistente.preco;
    } else {
      carrinhoAtual.push({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        imagemUrl: produto.imagemUrl,
        quantidade: quantidade,
        subtotal: produto.preco * quantidade,
      });
    }
    this.carrinhoSignal.set(carrinhoAtual);
  }

  atualizarQuantidade(produtoId: number, quantidade: number) {
    const carrinhoAtual = [...this.carrinhoSignal()];
    const itemExistente = carrinhoAtual.find((item) => item.id === produtoId);

    if (!itemExistente) return;

    if (quantidade <= 0) {
      this.removerProduto(produtoId);
      return;
    }

    itemExistente.quantidade = quantidade;
    itemExistente.subtotal = itemExistente.preco * quantidade;
    this.carrinhoSignal.set(carrinhoAtual);
  }

  removerProduto(produtoId: number) {
    const novoCarrinho = this.carrinhoSignal().filter((item) => item.id !== produtoId);
    this.carrinhoSignal.set(novoCarrinho);
  }

  limparCarrinho() {
    this.carrinhoSignal.set([]);
  }
}
