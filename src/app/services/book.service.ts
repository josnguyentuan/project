import { HttpClient } from '@angular/common/http';
import { Books } from './../models/books';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_URL = "http://localhost:3000/books";
  constructor(
    private http: HttpClient
  ) { }
  all(embed: boolean = true): Observable<Books[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_expand=category';
    return this.http.get<Books[]>(requestUrl);
  }
  delete(id: any): Observable<any>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.delete<any>(requestUrl);
  }
  findById(id:any): Observable<Books>{
    let requestUrl = `${this.API_URL}/${id}?_embed=books`;
    return this.http.get<Books>(requestUrl);
  }
  store(obj: Books): Observable<any>{
   
    return this.http.post<any>(this.API_URL, obj);
  }
  put(obj: Books): Observable<any>{
    let requestUrl = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(requestUrl, obj);
  }
}
