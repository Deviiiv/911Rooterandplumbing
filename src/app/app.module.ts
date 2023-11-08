import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceAreasComponent } from './pages/service-areas/service-areas.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TopComponent } from './sharepage/top/top.component';
import { CurrencyPipe } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Home2Component } from './pages/home/home2/home2/home2.component';
import { Home3Component } from './pages/home/home2/home3/home3.component';
import { Home4Component } from './pages/home/home2/home4/home4.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ServiceAreasComponent,
    ContactComponent,
    TopComponent,
    Home2Component,
    Home3Component,
    Home4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurrencyPipe,
    FormsModule, ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
