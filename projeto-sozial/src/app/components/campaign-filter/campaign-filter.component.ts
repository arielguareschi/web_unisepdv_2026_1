import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-filter',
  templateUrl: './campaign-filter.component.html',
  styleUrls: ['./campaign-filter.component.css']
})
export class CampaignFilterComponent {
  texto = '';

  @Output() filtrar = new EventEmitter<string>();
  @Output() limpar = new EventEmitter<void>();

  emitirFiltro(): void {
    this.filtrar.emit(this.texto);
  }

  limparFiltro(): void {
    this.texto = '';
    this.limpar.emit();
  }
}
