import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'carousel-success',
  standalone: true,
  imports: [CommonModule, CarouselModule,RouterModule],
  templateUrl: './carousel-success.component.html',
  styleUrl: './carousel-success.component.css'
})
export class CarouselSuccessComponent {
  customOptions: OwlOptions = {
    items:4 ,//3dad sowar altzhar fal screen
      dots: false,
      mouseDrag:false,
      touchDrag:false,
      pullDrag:false,
      freeDrag:false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 500,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
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
