import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepielistComponent } from './recepies/recepielist/recepielist.component';
import { RecepiedetailComponent } from './recepies/recepiedetail/recepiedetail.component';
import { RecepieitemComponent } from './recepies/recepielist/recepieitem/recepieitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { AdditemsectionComponent } from './shoppinglist/additemsection/additemsection.component';
import { ListitemsectionComponent } from './shoppinglist/listitemsection/listitemsection.component';


@NgModule({
  declarations: [
    AppComponent,
    RecepiesComponent,
    RecepielistComponent,
    RecepiedetailComponent,
    RecepieitemComponent,
    ShoppinglistComponent,
    AdditemsectionComponent,
    ListitemsectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
