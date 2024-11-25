import { Component } from '@angular/core';
import { VideoComponent } from './video/video.component';
import { CarouselSuccessComponent } from "../carousel-success/carousel-success.component";


@Component({
  selector: 'web-home',
  standalone: true,
  imports: [HomeComponent, VideoComponent, CarouselSuccessComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
