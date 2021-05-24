import { INoticia } from './noticia.model';
export interface IApi {
  pagination?: {},
  data?: INoticia
}
export class Api implements IApi{
  constructor( public pagination?: {}, public data?: INoticia) {}
}
