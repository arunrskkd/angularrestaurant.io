import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepies.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  recepieseleted:Recepie;
  constructor() { }

  ngOnInit() {
  }

}
