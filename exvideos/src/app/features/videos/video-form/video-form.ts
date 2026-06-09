import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoApi } from '../../../core/services/video-api';

@Component({
  selector: 'app-video-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './video-form.html',
  styleUrl: './video-form.css',
})
export class VideoForm implements OnInit {
  private fb = inject(FormBuilder);
  private videoApiService = inject(VideoApi);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  editingId: string | null = null;
  loading = false;
  loadingData = false;
  successMessage = '';
  errorMessage = '';

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
      this.editingId = id;
      this.loadVideo(this.editingId);
    }
  }

  loadVideo(id: string): void {
    this.loadingData = true;
    this.videoApiService.getById(id).subscribe({
      next: (video) => {
        this.form.patchValue({
          titulo: video.titulo,
          descricao: video.descricao,
          categoria: video.categoria,
          duracao: video.duracao,
          miniatura: video.miniatura,
          url: video.url,
        });
        this.loadingData = false;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar os dados do vídeo.';
        this.loadingData = false;
      },
    });
  }

  submit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formValue = this.form.getRawValue();

    const videoData = {
      titulo: formValue.titulo,
      descricao: formValue.descricao,
      categoria: formValue.categoria,
      duracao: formValue.duracao,
      miniatura: formValue.miniatura,
      url: formValue.url,
    };

    if (this.editingId !== null) {
      this.videoApiService.update(this.editingId, videoData).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Vídeo atualizado com sucesso!';
          setTimeout(() => {
            this.router.navigate(['/videos']);
          }, 1000);
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'Erro ao atualizar o vídeo.';
        },
      });
      return;
    }
    this.videoApiService.create(videoData).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = 'Vídeo cadastrado com sucesso!';
        this.form.reset();

        setTimeout(() => {
          this.router.navigate(['/videos']);
        }, 1000);
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Erro ao cadastrar vídeo.';
      },
    });
  }
}
