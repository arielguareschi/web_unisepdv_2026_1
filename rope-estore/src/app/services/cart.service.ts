import { computed, Injectable, signal } from '@angular/core';
import { CarrinhoItem } from '../models/carrinho-item';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
