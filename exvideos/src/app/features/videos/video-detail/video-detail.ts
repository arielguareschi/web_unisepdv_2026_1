import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../../core/models/video.model';
import { VideoApi } from '../../../core/services/video-api';

@Component({
  selector: 'app-video-detail',
  imports: [],
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
    const id = Number(this.route.snapshot.paramMap.get('id'));

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
