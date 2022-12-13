import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ilibros } from './Ilibros';


@Component({
  selector: 'app-pantallauno',
  templateUrl: './pantallauno.component.html',
  styleUrls: ['./pantallauno.component.css']
})
export class PantallaunoComponent implements OnInit {
  titulo: string = 'Hola'

  Libros: Ilibros [] = [{
    id: 1,
    nombre: "Un crimen que el cielo puede perdonar",
    resena: "Una rica epresaria de industria apareace envenenada",
   fecha_publicacion: "22/03/2007",
    imagen_caratulad: "https://d3bj2wkomrw52r.cloudfront.net/static-img/v2/books/un-crimen-que-el-cielo-no-puede-perdonar-600.jpg",
    codigo_isbn: "TE54R",
    edicion: "Ed. Amarante, 2017",
    nombre_direccion_editorial: "Roberto Santos Av.los Andes",
    escritor_nacionalidad: "Carlos Marin España Barcelona"
  },

  {
    id: 2,
    nombre: "El libro de la vida",
    resena: "Una rica epresaria de industria apareace envenenada",
   fecha_publicacion: "22/03/2007",
    imagen_caratulad: "https://d3bj2wkomrw52r.cloudfront.net/static-img/v2/books/un-crimen-que-el-cielo-no-puede-perdonar-600.jpg",
    codigo_isbn: "TE54R",
    edicion: "Ed. Amarante, 2017",
    nombre_direccion_editorial: "Roberto Santos Av.los Andes",
    escritor_nacionalidad: "Carlos Marin España Barcelona"
  },

  {
    id: 3,
    nombre: "La razon de ser",
    resena: "Una rica epresaria de industria apareace envenenada",
   fecha_publicacion: "22/03/2007",
    imagen_caratulad: "https://d3bj2wkomrw52r.cloudfront.net/static-img/v2/books/un-crimen-que-el-cielo-no-puede-perdonar-600.jpg",
    codigo_isbn: "TE54R",
    edicion: "Ed. Amarante, 2017",
    nombre_direccion_editorial: "Roberto Santos Av.los Andes",
    escritor_nacionalidad: "Carlos Marin España Barcelona"
  }



]

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'];
      this.Libros= this.Libros.filter(Libro => Libro.id== params ['id'])
      })
      
  }

}
