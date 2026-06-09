import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Video } from '../models/video.model';

type FirebaseVideo = Omit<Video, 'id'> & { id?: unknown };

@Injectable({
  providedIn: 'root',
})
export class VideoApi {
  private http = inject(HttpClient);
  // private apiUrl = 'http://localhost:3000/videos';
  private apiUrl = 'https://exvideos-44bfe-default-rtdb.firebaseio.com/videos';
  private sufix = '.json';

  getAll(): Observable<Video[]> {
    return this.http.get<Record<string, FirebaseVideo> | null>(this.apiUrl + this.sufix).pipe(
      map((response) => {
        if (!response) {
          return [];
        }

        return Object.entries(response).map(([id, video]) => {
          const { id: _ignoredId, ...videoData } = video;

          return {
            id,
            ...videoData,
          };
        });
      }),
    );
  }

  getById(id: string): Observable<Video> {
    return this.http.get<FirebaseVideo | null>(`${this.apiUrl}/${id}${this.sufix}`).pipe(
      map((video) => {
        if (!video) {
          throw new Error('Video nao encontrado');
        }

        const { id: _ignoredId, ...videoData } = video;

        return {
          id,
          ...videoData,
        };
      }),
    );
  }

  create(video: Omit<Video, 'id'>): Observable<Video> {
    return this.http.post<{ name: string }>(this.apiUrl + this.sufix, video).pipe(
      map((response) => ({
        id: response.name,
        ...video,
      })),
    );
  }

  update(id: string, video: Omit<Video, 'id'>): Observable<Video> {
    return this.http.put<Omit<Video, 'id'>>(`${this.apiUrl}/${id}${this.sufix}`, video).pipe(
      map((response) => ({
        id,
        ...response,
      })),
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}${this.sufix}`);
  }
}
