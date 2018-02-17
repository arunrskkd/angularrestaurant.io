import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Recepie } from '../recepies.model';

@Component({
  selector: 'app-recepiedetail',
  templateUrl: './recepiedetail.component.html',
  styleUrls: ['./recepiedetail.component.css']
})
export class RecepiedetailComponent implements OnInit {
  @Input() recepie:Recepie;
  constructor() { }

  ngOnInit() {
  }

}
