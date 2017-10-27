import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Appplication pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IngredientPage } from '../pages/ingredient/ingredient';
import { AddPizzaPage } from '../pages/add-pizza/add-pizza';
import { AddIngredientPage } from '../pages/add-ingredient/add-ingredient';
//Plugins import
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IngredientPage,
    AddPizzaPage,
    AddIngredientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IngredientPage,
    AddPizzaPage,
    AddIngredientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Base64ToGallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
