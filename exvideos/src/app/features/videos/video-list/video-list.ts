import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Video } from '../../../core/models/video.model';
import { VideoApi } from '../../../core/services/video-api';

@Component({
  selector: 'app-video-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './video-list.html',
  styleUrl: './video-list.css',
})
export class VideoList implements OnInit {
  private videoApiService = inject(VideoApi);
  private router = inject(Router);

  videos: Video[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.loading = true;
    this.errorMessage = '';

    this.videoApiService.getAll().subscribe({
      next: (response) => {
        this.videos = response;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao buscar videos:', error);
        this.errorMessage = 'Erro ao carregar os videos...';
        this.loading = false;
      },
    });
  }

  detail(id: string): void {
    this.router.navigate(['/videos', id]);
  }

  edit(id: string): void {
    this.router.navigate(['/cadastrar-video'], {
      queryParams: { id },
    });
  }

  remove(id: string): void {
    const confirmDelete = confirm('Tem certeza que quer excluir?');

    if (!confirmDelete) {
      return;
    }

    this.videoApiService.delete(id).subscribe({
      next: () => {
        this.successMessage = 'Vídeo excluído com sucesso!';
        this.loadVideos();
        setTimeout(() => {
          this.successMessage = '';
        }, 2000);
      },
      error: () => {
        this.errorMessage = 'Erro ao excluir o vídeo.';
      },
    });
  }
}
