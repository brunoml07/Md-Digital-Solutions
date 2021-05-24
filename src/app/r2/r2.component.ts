import { HttpResponse } from '@angular/common/http';
import { NoticiaService } from './../service/noticia.service';
import { INoticia } from './../model/noticia.model';
import { Component, OnInit } from '@angular/core';
import { IApi } from '../model/api.model';

@Component({
  selector: 'app-r2',
  templateUrl: './r2.component.html',
  styleUrls: ['./r2.component.css']
})
export class R2Component implements OnInit {
  api: IApi;
  noticias: INoticia

  constructor( protected noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.traerNoticias()
  }

  traerNoticias() {
    this.noticiaService.findAllNoticias().subscribe((res: HttpResponse<IApi>) =>{
      this.api = res.body
      this.noticias = this.api.data
      console.log( this.api, 'aqui')
    })
  };

}
