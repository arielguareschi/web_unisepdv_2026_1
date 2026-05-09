import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoLocal } from '../../../core/services/video-local';

@Component({
  selector: 'app-video-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './video-form.html',
  styleUrl: './video-form.css',
})
export class VideoForm implements OnInit {
  private fb = inject(FormBuilder);
  private videoLocalService = inject(VideoLocal);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  editingId: number | null = null;

  form = this.fb.nonNullable.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    categoria: ['', [Validators.required]],
    duracao: ['', [Validators.required]],
    miniatura: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.editingId = Number(id);
      const video = this.videoLocalService.getById(this.editingId);
      if (video) {
        this.form.patchValue({
          titulo: video.titulo,
          descricao: video.descricao,
          categoria: video.categoria,
          duracao: video.duracao,
          miniatura: video.miniatura,
          url: video.url,
        });
      }
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const formValue = this.form.getRawValue();
    if (this.editingId !== null) {
      this.videoLocalService.update({
        id: this.editingId,
        titulo: formValue.titulo,
        descricao: formValue.descricao,
        categoria: formValue.categoria,
        duracao: formValue.duracao,
        miniatura: formValue.miniatura,
        url: formValue.url,
      });
    } else {
      this.videoLocalService.add({
        id: Date.now(),
        titulo: formValue.titulo,
        descricao: formValue.descricao,
        categoria: formValue.categoria,
        duracao: formValue.duracao,
        miniatura: formValue.miniatura,
        url: formValue.url,
      });
    }

    this.router.navigate(['/videos']);
  }
}
