import { Component, OnInit } from '@angular/core';
import { Recepie } from '../../recepies/recepies.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ingridient } from '../ingridient.model';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-additemsection',
  templateUrl: './additemsection.component.html',
  styleUrls: ['./additemsection.component.css']
})
export class AdditemsectionComponent implements OnInit {
 

  @ViewChild('name') nameref:ElementRef; 
  @ViewChild('cost') costref:ElementRef; 
  @Output() newemiter = new EventEmitter<Ingridient>();
  constructor() { }

  ngOnInit() {
  }
  additem(){
    this.newemiter.emit( new Ingridient(this.nameref.nativeElement.value , this.costref.nativeElement.value) );
  }

}
