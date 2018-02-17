import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../ingridient.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-listitemsection',
  templateUrl: './listitemsection.component.html',
  styleUrls: ['./listitemsection.component.css']
})
export class ListitemsectionComponent implements OnInit {
 @Input() listitems:Ingridient[];
  constructor() { }

  ngOnInit() {
  }

}
