import { Component, OnInit } from '@angular/core';
import { Ingridient } from './ingridient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredient:Ingridient[]=[];
  constructor() { }

  ngOnInit() {
  }
  getitem(item:Ingridient){
    this.ingredient.push(item);
  }

}
