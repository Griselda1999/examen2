import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantallados',
  templateUrl: './pantallados.component.html',
  styleUrls: ['./pantallados.component.css']
})
export class PantalladosComponent implements OnInit {

  titulo: string = ''
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

}
