import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzaAdminPage } from './pizza-admin';

@NgModule({
  declarations: [
    PizzaAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzaAdminPage),
  ],
})
export class PizzaAdminPageModule {}
