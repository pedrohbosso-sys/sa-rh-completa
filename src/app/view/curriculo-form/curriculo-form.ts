import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculoservice';

@Component({
  selector: 'app-curriculo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './curriculo-form.html',
  styleUrl: './curriculo-form.scss',
  host: { ngSkipHydration: 'true' },
})
export class CurriculoForm implements OnInit {
  public curriculos: Curriculo[] = [];

  public curriculo: Curriculo = new Curriculo(0, '', '', '', '', '', '', '', '');

  public modoEdicao: boolean = false;

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._curriculoService.getCurriculos().subscribe((resposta) => {
      this.curriculos = resposta;
    });
  }

  cadastrarCurriculo(): void {
    this._curriculoService.postCurriculo(this.curriculo).subscribe(() => {
      alert('Currículo cadastrado com sucesso!');

      this.curriculo = new Curriculo(0, '', '', '', '', '', '', '', '');

      this.listarCurriculos();
    });
  }

  abrirCurriculo(curriculo: Curriculo): void {
    this.curriculo = new Curriculo(
      curriculo.id,
      curriculo.nome,
      curriculo.foto,
      curriculo.descricao,
      curriculo.experiencia,
      curriculo.formacao,
      curriculo.email,
      curriculo.telefone,
      curriculo.linkedin,
    );

    this.modoEdicao = true;
  }

  atualizarCurriculo(): void {
    this._curriculoService.putCurriculo(this.curriculo.id, this.curriculo).subscribe(() => {
      alert('Currículo atualizado com sucesso!');

      this.listarCurriculos();

      this.limparFormulario();
    });
  }

  excluirCurriculo(id: number): void {
    if (confirm('Deseja realmente excluir este currículo?')) {
      this._curriculoService.deleteCurriculo(id).subscribe(() => {
        alert('Currículo excluído com sucesso!');

        this.listarCurriculos();

        this.limparFormulario();
      });
    }
  }

  limparFormulario(): void {
    this.curriculo = new Curriculo(0, '', '', '', '', '', '', '', '');

    this.modoEdicao = false;
  }
}
