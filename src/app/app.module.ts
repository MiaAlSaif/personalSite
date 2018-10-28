import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ConnectComponent } from './connect/connect.component';

import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from '@ks89/angular-modal-gallery';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    AboutmeComponent,
    PortfolioComponent,
    ResumeComponent,
    ConnectComponent,
    HomeComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalGalleryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
