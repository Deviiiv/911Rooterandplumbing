import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceAreasComponent } from './pages/service-areas/service-areas.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TopComponent } from './sharepage/top/top.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { Home2Component } from './pages/home/home2/home2/home2.component';
import { Home3Component } from './pages/home/home2/home3/home3.component';
import { Home4Component } from './pages/home/home2/home4/home4.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'serviceAreas',component:ServiceAreasComponent},
  {path:'contact',component:ContactComponent},
  {path:'home2',component:Home2Component},
  {path:'home3',component:Home3Component},
  {path:'home4Compone',component:Home4Component},
  {path:'footerCompone',component:FooterComponent},
  {path:'topCompone',component:TopComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
