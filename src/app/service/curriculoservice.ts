import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  private apiUrl = 'http://localhost:3030/curriculos';

  constructor(private http: HttpClient) {}

  // GET
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  // POST
postCurriculo(curriculo: Curriculo): Observable<Curriculo> {
  return this.http.post<Curriculo>(this.apiUrl, curriculo);
}

// PUT
putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo> {
  const urlUpdate = `${this.apiUrl}/${id}`;
  return this.http.put<Curriculo>(urlUpdate, curriculo);
}

// DELETE
deleteCurriculo(id: any): Observable<any> {
  const urlDelete = `${this.apiUrl}/${id}`;
  return this.http.delete(urlDelete);
 }
}
