import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepies.model';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recepielist',
  templateUrl: './recepielist.component.html',
  styleUrls: ['./recepielist.component.css']
})
export class RecepielistComponent implements OnInit {
  recepies:Recepie[]=[ new Recepie('lime','sweet','https://5.imimg.com/data5/OV/WJ/MY-29578/lime-juice-500x500.jpg'),new Recepie('carrot juice','sweet','http://purejuice.bar/wp-content/uploads/2014/12/shutterstock_94349956_090413101908.jpg')];
  @Output() recepieselect = new EventEmitter<Recepie>();
  constructor() { }

  ngOnInit() {
  }

  elementsel(recepie:Recepie){
    this.recepieselect.emit(recepie);
  }

}
