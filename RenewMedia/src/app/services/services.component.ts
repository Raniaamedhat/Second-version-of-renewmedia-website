import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'services-page',
  standalone: true,
  imports: [CommonModule,RouterModule, CarouselModule, ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  customOptions: OwlOptions = {
      
      items:4 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    
  }
}
