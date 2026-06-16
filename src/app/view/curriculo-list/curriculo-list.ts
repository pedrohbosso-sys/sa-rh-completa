import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // adicione isso

import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculoservice';

@Component({
  selector: 'app-curriculo-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // adicione RouterModule aqui
  templateUrl: './curriculo-list.html',
  styleUrl: './curriculo-list.scss',
})
export class CurriculoList implements OnInit {
  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}

  listarCurriculos(): void {
    this._curriculoService.getCurriculos().subscribe({
      next: (resposta) => {
        this.curriculos = resposta.map(
          (e) =>
            new Curriculo(
              e.id,
              e.nome,
              e.foto,
              e.descricao,
              e.experiencia,
              e.formacao,
              e.email,
              e.telefone,
              e.linkedin,
            ),
        );
      },
      error: (erro) => {
        console.error('Erro ao listar currículos:', erro);
      },
    });
  }

  excluirCurriculo(id: any): void {
    this._curriculoService.deleteCurriculo(id).subscribe({
      next: () => {
        this.listarCurriculos();
      },
      error: (erro) => {
        console.error('Erro ao excluir currículo:', erro);
      },
    });
  }

  ngOnInit(): void {
    this.listarCurriculos();
  }
}
