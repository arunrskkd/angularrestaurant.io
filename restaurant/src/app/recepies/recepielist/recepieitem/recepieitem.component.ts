import { Component, OnInit } from '@angular/core';
import { Recepie } from '../../recepies.model';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recepieitem',
  templateUrl: './recepieitem.component.html',
  styleUrls: ['./recepieitem.component.css']
})
export class RecepieitemComponent implements OnInit {
  @Input() recepieitm:Recepie;
  @Output() recepieevent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  recepieselect(){
    this.recepieevent.emit();
  }

}
