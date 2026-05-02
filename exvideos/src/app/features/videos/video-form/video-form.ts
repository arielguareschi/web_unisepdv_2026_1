import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './video-form.html',
  styleUrl: './video-form.css',
})
export class VideoForm {
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    categoria: ['', [Validators.required]],
    duracao: ['', [Validators.required]],
    miniatura: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Dados do formulario:', this.form.getRawValue());
  }
}
