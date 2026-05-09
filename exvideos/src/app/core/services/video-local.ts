import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoLocal {
  private storageKey = 'videos';

  getAll(): Video[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveAll(videos: Video[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(videos));
  }

  add(video: Video): void {
    const videos = this.getAll();
    videos.push(video);
    this.saveAll(videos);
  }

  getById(id: number): Video | undefined {
    return this.getAll().find((video) => video.id === id);
  }

  update(updatedVideo: Video): void {
    const videos = this.getAll().map((video) =>
      video.id === updatedVideo.id ? updatedVideo : video,
    );
    this.saveAll(videos);
  }

  delete(id: number): void {
    const videos = this.getAll().filter((video) => video.id !== id);
    this.saveAll(videos);
  }
}
