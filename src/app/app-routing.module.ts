import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PagenotfoundComponent}      from './pagenotfound/pagenotfound.component';
import { AboutmeComponent }      from './aboutme/aboutme.component';
import { PortfolioComponent }      from './portfolio/portfolio.component';
import { ResumeComponent }      from './resume/resume.component';
import { ConnectComponent }      from './connect/connect.component';

import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from '@ks89/angular-modal-gallery';

export const routes: Routes = [
  { path: "",   component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: "**", component: PagenotfoundComponent},

];


@NgModule({
  imports: [ RouterModule.forRoot(routes), ModalGalleryModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
