import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const routes: Routes = [
  { path: '', redirectTo: '/recepies', pathMatch: 'full' },
  { path: 'recepies', component: RecepiesComponent },
  { path: 'shopping', component: ShoppinglistComponent },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
