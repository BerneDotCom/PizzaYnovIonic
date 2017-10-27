import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPizzaPage } from './view-pizza';

@NgModule({
  declarations: [
    ViewPizzaPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPizzaPage),
  ],
})
export class ViewPizzaPageModule {}
