import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { DatePickerModule } from 'ion-datepicker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    DatePickerModule,
    BrowserModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
