import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoApi {
  private http = inject(HttpClient);
  // private apiUrl = 'http://localhost:3000/videos';
  private apiUrl = 'https://exvideos-44bfe-default-rtdb.firebaseio.com/videos';
  private sufix = '.json';

  getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl + this.sufix);
  }

  getById(id: number): Observable<Video> {
    return this.getAll().pipe(
      map((videos) => {
        const video = videos.find((video) => video.id === id);

        if (!video) {
          throw new Error('Vídeo não encontrado');
        }

        return video;
      }),
    );

    // return this.http.get<Video>(`${this.apiUrl}/${id}${this.sufix}`);
  }
}
