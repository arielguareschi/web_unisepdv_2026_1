import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantidade-selector',
  imports: [FormsModule],
  templateUrl: './quantidade-selector.html',
  styleUrl: './quantidade-selector.css',
})
export class QuantidadeSelector {
  @Input() quantidade: number = 1;
  @Output() quantidadeChange = new EventEmitter<number>();

  aumentar() {
    this.quantidade++;
    this.quantidadeChange.emit(this.quantidade);
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
      this.quantidadeChange.emit(this.quantidade);
    }
  }

  aoDigitar() {
    if (this.quantidade < 1 || !this.quantidade) {
      this.quantidade = 1;
    }
    this.quantidadeChange.emit(this.quantidade);
  }
}
