import { IApi } from './../model/api.model';
import { INoticia } from './../model/noticia.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

type EntityArrayResponseType = HttpResponse<IApi>;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  public  resourceUrl = 'http://api.mediastack.com/v1/news?access_key=4123b144e76fb100873ef87c638472cd';
  constructor(protected http: HttpClient) { }

  findAllNoticias(): Observable<EntityArrayResponseType> {
    return this.http.get<IApi>(this.resourceUrl, {
        observe: 'response'
    });
}
}
