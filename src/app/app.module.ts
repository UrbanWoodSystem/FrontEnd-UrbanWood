

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFurnitureComponent } from './components/client/client-furniture/client-furniture.component';
import { ListFurnitureClientComponent } from './components/client/list-furniture-client/list-furniture-client.component';
import { RequestComponent } from './components/client/request/request.component';
import { HeaderClientComponent } from './components/core/header-client/header-client.component';
import { HeaderLoginComponent } from './components/core/header-login/header-login.component';
import { HeaderWoodworkComponent } from './components/core/header-woodwork/header-woodwork.component';
import { HomePageComponent } from './components/core/home-page/home-page.component';
import { RegisterWoodWorkercontactComponent } from './components/woodwork/register-wood-workercontact/register-wood-workercontact.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    HeaderClientComponent,
    HeaderWoodworkComponent,
    HomePageComponent,
    ListFurnitureClientComponent,
    ClientFurnitureComponent,
    ClientFurnitureComponent,
    RegisterWoodWorkercontactComponent,
    RequestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
