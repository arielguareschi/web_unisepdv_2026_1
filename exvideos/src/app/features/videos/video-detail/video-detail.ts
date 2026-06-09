import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Video } from '../../../core/models/video.model';
import { VideoApi } from '../../../core/services/video-api';

@Component({
  selector: 'app-video-detail',
  imports: [RouterLink],
  templateUrl: './video-detail.html',
  styleUrl: './video-detail.css',
})
export class VideoDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private videoApiService = inject(VideoApi);

  video?: Video;
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage = 'Video nao encontrado';
      this.loading = false;
      return;
    }

    this.videoApiService.getById(id).subscribe({
      next: (response) => {
        this.video = response;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar detalhes';
        this.loading = false;
      },
    });
  }
}
