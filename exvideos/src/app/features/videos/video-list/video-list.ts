import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Video } from '../../../core/models/video.model';
import { VideoLocal } from '../../../core/services/video-local';

@Component({
  selector: 'app-video-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './video-list.html',
  styleUrl: './video-list.css',
})
export class VideoList implements OnInit {
  private videoLocalService = inject(VideoLocal);
  private router = inject(Router);

  videos: Video[] = [];
  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.videos = this.videoLocalService.getAll();
  }

  edit(id: number): void {
    this.router.navigate(['/cadastrar-video'], {
      queryParams: { id },
    });
  }

  remove(id: number): void {
    this.videoLocalService.delete(id);
    this.loadVideos();
  }
}
