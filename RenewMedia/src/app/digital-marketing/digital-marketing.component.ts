import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'digital-marketing-page',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterModule],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.css'
})
export class DigitalMarketingComponent {
  customOptions: OwlOptions ={
    items:1 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
  }
  owlall :OwlOptions ={
    items:1 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
  }
  

}
