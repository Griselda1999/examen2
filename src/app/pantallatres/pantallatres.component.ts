import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantallatres',
  templateUrl: './pantallatres.component.html',
  styleUrls: ['./pantallatres.component.css']
})
export class PantallatresComponent implements OnInit {

  titulo: string = ''
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
