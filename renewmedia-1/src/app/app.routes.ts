import { Routes } from '@angular/router';
import { BehanceComponent } from './behance/behance.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component : HomeComponent},
    { path: 'behance', component : BehanceComponent},
    { path: 'services', component : ServicesComponent},
];
