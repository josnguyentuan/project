import { Author } from './../models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  API_URL = "http://localhost:3000/authors";
  constructor(private http: HttpClient){}
  
  all(embed: boolean = true): Observable<Author[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_embed=books';
    return this.http.get<Author[]>(requestUrl);
  }

  findById(id:any): Observable<Author>{
    let requestUrl = `${this.API_URL}/${id}?_embed=books`;
    return this.http.get<Author>(requestUrl);
  }

  store(obj: Author): Observable<any>{
    return this.http.post<any>(this.API_URL, obj);
  }

  delete(id: any): Observable<any>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.delete<any>(requestUrl);
  }

  put(obj: Author): Observable<any>{
    let requestUrl = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(requestUrl, obj);
  }
}
