import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { ProductionComponent } from './production/production.component';
import { WebMobAppComponent } from './web-mob-app/web-mob-app.component';
import { EventOrgComponent } from './event-org/event-org.component';
import { BehanceComponent } from './behance/behance.component';
import { ContactComponent } from './contact/contact.component';



export const routes: Routes = [
    { path:   
        '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component : HomeComponent},
    { path: 'services', component : ServicesComponent},
    { path: 'digital' , component:DigitalMarketingComponent},
    { path: 'graphic',  component:GraphicDesignComponent},
    { path: 'production', component:ProductionComponent},
    { path: 'web-mobile-apps', component: WebMobAppComponent} ,
    { path: 'eventorganization' , component: EventOrgComponent},
    { path: 'behance', component : BehanceComponent},
    { path: 'contact' , component: ContactComponent},
];
