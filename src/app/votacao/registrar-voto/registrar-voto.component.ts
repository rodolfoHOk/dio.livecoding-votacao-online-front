import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-voto',
  templateUrl: './registrar-voto.component.html',
  styleUrls: ['./registrar-voto.component.scss'],
})
export class RegistrarVotoComponent implements OnInit {
  id: string | null = null;
  nome: string | null = null;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.nome = params['nome'];
    });
  }

  voltar() {
    this.router.navigate(['/votacao']);
  }
}
