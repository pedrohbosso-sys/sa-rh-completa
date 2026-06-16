# Especificação de Requisitos de Software (SRS)
**Projeto:** Plataforma RH
**Versão:** 1.0
**Data:** 2 de Junho de 2026

## 1. Introdução
### 1.1 Propósito
Este documento descreve os requisitos funcionais e não funcionais para o Módulo de Currículos e Vagas da Plataforma de RH. O objetivo deste módulo é permitir que candidatos gerenciem suas informações profissionais e que a administração visualize esses dados.

### 1.2 Escopo
O sistema compreende o desenvolvimento de uma interface frontend em Angular integrada a um backend simulado (json-server). As funcionalidades incluem o CRUD completo de currículos, vinculação de dados por ID de usuário e interface administrativa para gestão.

---

## 2. Descrição Geral

A Plataforma RH é uma aplicação web desenvolvida em Angular com foco na gestão de currículos e vagas de emprego. O sistema permite que usuários cadastrem, visualizem, editem e excluam informações de forma dinâmica, consumindo dados de uma API simulada (json-server).

O sistema possui duas principais entidades:

- **Currículo:** Contém dados pessoais e profissionais como nome, foto, descrição, experiência, formação, email, telefone e GitHub.
- **Vagas:** Contém informações de oportunidades de emprego como nome da vaga, descrição, salário e imagem.

A aplicação conta com interface responsiva, listagens dinâmicas e formulários reativos baseados em two-way data binding (`ngModel`).

---

## 3. Requistos do Sistema 

### 3.1 Requistos Funcionais (RF)

- RF01: O sistema deve permitir o cadastro de currículos.
- RF02: O sistema deve permitir a listagem de currículos cadastrados.
- RF03: O sistema deve permitir a edição de currículos existentes.
- RF04: O sistema deve permitir a exclusão de currículos.
- RF05: O sistema deve permitir o cadastro de vagas.
- RF06: O sistema deve permitir a listagem de vagas cadastradas.
- RF07: O sistema deve permitir atualização de vagas.
- RF08: O sistema deve permitir exclusão de vagas.
- RF09: O sistema deve consumir dados de uma API simulada (json-server).
- RF10: O sistema deve atualizar automaticamente a listagem após operações CRUD.

### 3.2 Requsitos Não-Funcionais (RNF)

- RNF01: O sistema deve ser desenvolvido em Angular.
- RNF02: A interface deve ser responsiva e adaptável a diferentes telas.
- RNF03: O sistema deve ter boa usabilidade e organização visual.
- RNF04: O sistema deve utilizar comunicação assíncrona com Observables.
- RNF05: O sistema deve possuir código modularizado em componentes.
- RNF06: O tempo de resposta das operações deve ser rápido (< 2s em ambiente local).
- RNF07: O sistema deve manter consistência visual entre formulários e listagens.

## 4. Interface de Dados e Modelagem do Sistema

### 4.1 Diagramas

#### 4.1.1 Diagrama de Uso

- Usuário pode:
  - Cadastrar currículo
  - Editar currículo
  - Excluir currículo
  - Listar currículos
  - Cadastrar vaga
  - Editar vaga
  - Excluir vaga
  - Listar vagas

#### 4.1.2 Diagrama de Classe

- Curriculo
  - id: number
  - nome: string
  - foto: string
  - descricao: string
  - experiencia: string
  - formacao: string
  - email: string
  - telefone: string
  - github: string

- Vaga
  - id: number
  - nome: string
  - foto: string
  - descricao: string
  - salario: number

#### 4.1.1 Diagrama de Fluxo

Fluxo geral:
1. Usuário acessa formulário
2. Preenche dados
3. Sistema envia requisição para json-server
4. Backend simulado retorna resposta
5. Interface atualiza listagem automaticamente
6. Usuário visualiza alteração em tempo real

## 5. Critérios de Aceitação

1.  **Operação CRUD:** É possível criar, ler, atualizar e excluir um registro no `db.json` através da interface?
2.  **Navegação:** As rotas configuradas levam aos componentes corretos sem erros de console?
3.  **Feedback:** O usuário recebe uma confirmação (ex: MatSnackBar) ao salvar um currículo?
4.  **Consistência:** Os dados exibidos na listagem correspondem exatamente ao que está no backend simulado?

## 6. Configuração do Ambiente

- Node.js instalado (versão LTS recomendada)
- Angular CLI instalado (`npm install -g @angular/cli`)
- json-server instalado (`npm install -g json-server`)
- Execução do backend simulado:
  ```bash
  json-server --watch db.json
