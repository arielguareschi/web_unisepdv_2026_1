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
  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.videoApiService.getAll().subscribe({
      next: (response) => {
        this.videos = response;
      },
      error: (error) => {
        console.error('Erro ao buscar videos:', error);
      },
    });
  }

  detail(id: number): void {
    this.router.navigate(['/videos', id]);
  }

  edit(id: number): void {
    this.router.navigate(['/cadastrar-video'], {
      queryParams: { id },
    });
  }

  remove(id: number): void {
    // this.videoLocalService.delete(id);
    this.loadVideos();
  }
}
