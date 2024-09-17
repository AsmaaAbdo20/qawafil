import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { AbouUsComponent } from './features/abou-us/abou-us.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AbouUsComponent },
];
