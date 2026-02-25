import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumo'
})
export class ResumoPipe implements PipeTransform {
  transform(valor: string | null | undefined, limite: number = 60): string {
    const v = (valor ?? '').trim();
    if (!v) return '';
    return v.length > limite ? v.substring(0, limite) + '...' : v;
  }
}
