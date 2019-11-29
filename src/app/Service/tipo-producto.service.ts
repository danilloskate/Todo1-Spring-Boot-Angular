import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipoProductoService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getTipoProductoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'tipoproductos-list');
  }

  createTipoProducto(tipoProducto: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-tipoproducto', tipoProducto);
  }

  deleteTipoProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-tipoproducto/${id}`, { responseType: 'text' });
  }

  getTipoProducto(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/tipoproducto/${id}`);
  }

  updateTipoProducto(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-tipoproducto/${id}`, value);
  }
  
}                                           