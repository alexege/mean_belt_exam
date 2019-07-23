import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAll(){
    return this._http.get('/pets');
  }

  getOne(id){
    return this._http.get(`/pets/${id}`);
  }

  create(pet){
    return this._http.post(`/pets`, pet);
  }

  update(id, pet){
    return this._http.put(`/pets/${id}`, pet);
  }

  delete(id){
    return this._http.delete(`/pets/${id}`);
  }

  like(id, likes){
    return this._http.post(`/pets/${id}/like`, likes);
  }

}
