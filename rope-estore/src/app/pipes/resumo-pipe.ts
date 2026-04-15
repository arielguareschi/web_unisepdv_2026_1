import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumo',
})
export class ResumoPipe implements PipeTransform {
  transform(valor: string, limite: number = 10): string {
    return valor.length > limite
      ? valor.substr(0, limite) + '...'
      : valor;
  }
}
