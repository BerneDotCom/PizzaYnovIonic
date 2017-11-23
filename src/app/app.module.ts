import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

//Appplication pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IngredientPage } from '../pages/ingredient/ingredient';
import { AddPizzaPage } from '../pages/add-pizza/add-pizza';
import { AddIngredientPage } from '../pages/add-ingredient/add-ingredient';
import { PanierPage } from '../pages/panier/panier';
import { ViewPizzaPage } from '../pages/view-pizza/view-pizza';
import { IntroPage } from '../pages/intro/intro';
import { PizzaAdminPage } from '../pages/pizza-admin/pizza-admin';

//Services
import { PizzaService } from '../providers/pizza-service/pizza-service';
import { IngredientService } from '../providers/ingredient-service/ingredient-service';


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
    AddIngredientPage,
    PanierPage,
    ViewPizzaPage,
    IntroPage,
    PizzaAdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IngredientPage,
    AddPizzaPage,
    AddIngredientPage,
    PanierPage,
    ViewPizzaPage,
    IntroPage,
    PizzaAdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Base64ToGallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaService,
    IngredientService,
  ]
})
export class AppModule {}
