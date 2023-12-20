import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
