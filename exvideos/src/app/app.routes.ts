import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { VideoDetail } from './features/videos/video-detail/video-detail';
import { VideoForm } from './features/videos/video-form/video-form';
import { VideoList } from './features/videos/video-list/video-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cadastrar-video', component: VideoForm },
  { path: 'videos', component: VideoList },
  { path: 'videos/:id', component: VideoDetail },
  { path: '**', redirectTo: '' },
];
