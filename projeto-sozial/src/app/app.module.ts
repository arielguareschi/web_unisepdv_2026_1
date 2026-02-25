import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { CampaignFilterComponent } from './components/campaign-filter/campaign-filter.component';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CampanhasComponent } from './pages/campanhas/campanhas.component';
import { CampanhaDetalheComponent } from './pages/campanha-detalhe/campanha-detalhe.component';

import { ResumoPipe } from './pipes/resumo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CampaignCardComponent,
    CampaignFilterComponent,
    HomeComponent,
    SobreComponent,
    CampanhasComponent,
    CampanhaDetalheComponent,
    ResumoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
