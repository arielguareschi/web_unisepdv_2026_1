import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampanhasService {
  private campanhas: Campaign[] = [
    {
      id: 1,
      titulo: 'Campanha Inverno',
      descricao: 'Arrecadação de agasalhos para famílias em situação de vulnerabilidade.',
      ativo: true,
      criadoEm: new Date('2026-02-01')
    },
    {
      id: 2,
      titulo: 'Campanha Natal',
      descricao: 'Doação de brinquedos para crianças da comunidade.',
      ativo: false,
      criadoEm: new Date('2025-12-10')
    },
    {
      id: 3,
      titulo: 'Campanha Alimentos',
      descricao: 'Cesta básica e itens não perecíveis para instituições locais.',
      ativo: true,
      criadoEm: new Date('2026-01-15')
    }
  ];

  getAll(): Campaign[] {
    // retorna uma cópia para evitar alterações fora do service
    return [...this.campanhas];
  }

  getById(id: number): Campaign | undefined {
    return this.campanhas.find(c => c.id === id);
  }

  delete(id: number): void {
    this.campanhas = this.campanhas.filter(c => c.id !== id);
  }
}
