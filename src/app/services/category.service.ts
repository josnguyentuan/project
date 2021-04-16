import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = "http://localhost:3000/categories";
  constructor(private http: HttpClient){}
  
  all(embed: boolean = true): Observable<Category[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_embed=books';
    return this.http.get<Category[]>(requestUrl);
  }
  relatedBook(embed: boolean = true): Observable<Category[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_embed=books';
    return this.http.get<Category[]>(requestUrl);
  }

  findById(id:any): Observable<Category>{
    let requestUrl = `${this.API_URL}/${id}?_embed=books`;
    return this.http.get<Category>(requestUrl);
  }

  store(obj: Category): Observable<any>{
    return this.http.post<any>(this.API_URL, obj);
  }

  delete(id: any): Observable<any>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.delete<any>(requestUrl);
  }

  put(obj: Category): Observable<any>{
    let requestUrl = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(requestUrl, obj);
  }
}
