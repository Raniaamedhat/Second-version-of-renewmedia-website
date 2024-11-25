import { CarouselModule} from 'ngx-owl-carousel-o';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { VideoComponent } from './home/video/video.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule,
    LoaderComponent, NavBarComponent, FooterComponent, 
    HomeComponent,ServicesComponent, VideoComponent, 
    CarouselModule, FontAwesomeModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'renewmedia-1';
  
}
