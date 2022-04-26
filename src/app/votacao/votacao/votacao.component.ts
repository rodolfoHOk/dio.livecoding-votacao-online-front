import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participante } from 'src/app/model/participante';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.scss'],
})
export class VotacaoComponent implements OnInit {
  participantes: Participante[] = [];
  voto: string | null = null;

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes() {
    this.restService
      .getData('/participantes/todos')
      .subscribe((response) => (this.participantes = response));
  }

  votar() {
    const participante: Participante = this.participantes.filter(
      (p) => p.id === this.voto
    )[0];

    this.restService
      .postData('/votacao', participante)
      .subscribe((response) => {
        this.router.navigate([
          `/votacao/registrar?id=${response.id}&nome=${response.nome}`,
        ]);
      });
  }
}
