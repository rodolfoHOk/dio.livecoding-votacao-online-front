import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VotacaoComponent } from './votacao/votacao/votacao.component';
import { RegistrarVotoComponent } from './votacao/registrar-voto/registrar-voto.component';

@NgModule({
  declarations: [AppComponent, VotacaoComponent, RegistrarVotoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
