import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { VideoForm } from './features/videos/video-form/video-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cadastrar-video', component: VideoForm },
  { path: '**', redirectTo: '' },
];
