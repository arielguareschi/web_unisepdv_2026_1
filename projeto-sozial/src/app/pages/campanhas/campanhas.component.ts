import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../models/campaign.model';
import { CampanhasService } from '../../services/campanhas.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.component.html',
  styleUrls: ['./campanhas.component.css']
})
export class CampanhasComponent implements OnInit {
  campanhas: Campaign[] = [];
  filtroAtual = '';

  constructor(private campanhasService: CampanhasService) {}

  ngOnInit(): void {
    this.recarregar();
  }

  recarregar(): void {
    this.campanhas = this.campanhasService.getAll();
    if (this.filtroAtual.trim()) {
      this.aplicarFiltro(this.filtroAtual);
    }
  }

  aplicarFiltro(texto: string): void {
    this.filtroAtual = texto;
    const t = texto.trim().toLowerCase();
    this.campanhas = this.campanhasService
      .getAll()
      .filter(c => c.titulo.toLowerCase().includes(t));
  }

  limparFiltro(): void {
    this.filtroAtual = '';
    this.campanhas = this.campanhasService.getAll();
  }

  remover(id: number): void {
    this.campanhasService.delete(id);
    this.recarregar();
  }

  trackById(index: number, item: Campaign): number {
    return item.id;
  }
}
