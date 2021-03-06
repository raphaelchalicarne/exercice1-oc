import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookListPage } from '../pages/book-list/book-list';
import { CdListPage } from '../pages/cd-list/cd-list';
import { LendBookPage } from '../pages/lend-book/lend-book';
import { LendCdPage } from '../pages/lend-cd/lend-cd';
import { SettingsPage } from '../pages/settings/settings';
import { StuffService } from '../services/stuff.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StuffService
  ]
})
export class AppModule {}
