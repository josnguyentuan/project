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
  ads(embed: boolean = true): Observable<Books[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_page=1&_limit=4';
    return this.http.get<Books[]>(requestUrl);
  }
  delete(id: any): Observable<any>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.delete<any>(requestUrl);
  }
  findById(id:any): Observable<Books>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.get<Books>(requestUrl);
  }
  store(obj: Books): Observable<any>{
   
    return this.http.post<any>(this.API_URL, obj);
  }
  put(obj: Books): Observable<any>{
    let requestUrl = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(requestUrl, obj);
  }
  getAll(filter: any): Observable<any>{
    let requestApi = this.API_URL + "?_expand=category&_expand=author";
    switch(filter.orderBy){
      case "1":
        requestApi += `&_sort=price&_order=asc`;
        break;
      case "2":
        requestApi += `&_sort=price&_order=desc`;
        break;
      case "3":
        requestApi += `&_sort=title&_order=asc`;
        break;
      case "4":
        requestApi += `&_sort=title&_order=desc`;
        break;
    }

    if(filter.keyword.length > 0){
      requestApi += `&title_like=${filter.keyword}`;
    }

    return this.http.get<any>(requestApi);
  }
  
}
