export interface INoticia {
  author?: string,
  title?: string,
  source?: string,
  category?: string,
  lenguage?: string,
  country?:string,
}
export class Noticia implements INoticia{
  constructor( public author?: string, public title?: string, public source?: string,
      public category?: string, public lenguage?: string, public country?:string  ) {};
}
