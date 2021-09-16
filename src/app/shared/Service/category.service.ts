import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Model/category.model';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private REST_API_SERVER = "https://pokeapi.co/api/v2/type";
  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.REST_API_SERVER);
  }
}
