import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarVotoComponent } from './votacao/registrar-voto/registrar-voto.component';
import { VotacaoComponent } from './votacao/votacao/votacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'votacao',
    pathMatch: 'full',
  },
  {
    path: 'votacao',
    component: VotacaoComponent,
  },
  {
    path: 'votacao/registrar',
    component: RegistrarVotoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
