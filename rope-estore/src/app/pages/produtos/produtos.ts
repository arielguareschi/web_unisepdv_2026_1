import { Component, inject } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Produto } from '../../models/produto';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-produtos',
  imports: [ProductCard],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  private carrinhoService = inject(CarrinhoService);

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Calcinha Azul',
      preco: 19.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao:
        'Uma calcinha azul, feita de algodão, confortável, bonita e charmosa para os seus melhores momentos muito confortável .',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Calcinha Bege',
      preco: 152522229.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: false,
    },
    {
      id: 3,
      nome: 'Calcinha Rosa',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 4,
      nome: 'Calcinha Vermelha',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: false,
    },
    {
      id: 5,
      nome: 'Calcinha Preta',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 6,
      nome: 'Calcinha Branca',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 7,
      nome: 'Calcinha Ausente',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 8,
      nome: 'Calcinha Felina',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 9,
      nome: 'Calcinha de Pelucia',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 10,
      nome: 'Calcinha WePink',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 11,
      nome: 'Calcinha Tadala',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 12,
      nome: 'Calcinha Profissoes',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 13,
      nome: 'Calcinha Azul',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
    {
      id: 14,
      nome: 'Calcinha de Renda',
      preco: 29.9,
      imagemUrl: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1d4u4ya8pmo45',
      descricao: 'XXXX',
      ativo: true,
    },
  ];

  adicionarAoCarrinho(evento: { produto: Produto; quantidade: number }) {
    this.carrinhoService.adicionarProduto(evento.produto, evento.quantidade);
  }
}
