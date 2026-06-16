export class Curriculo {
  //Atributos
  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public experiencia: string,
    public formacao: string,
    public email: string,
    public telefone: string,
    public linkedin: string,
  ) {}

  //métodos
  // Mapeamento de Dados da API ( toMap e fromMap)
  //toMap : OBJ => API
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      experiencia: this.experiencia,
      formacao: this.formacao,
    };
  }

  //API -> OBJ
  fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.experiencia,
      map.formacao,
      map.email,
      map.telefone,
      map.linkedin,
    );
  }
}
