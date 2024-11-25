import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {
  customOptions: OwlOptions ={
    items:3 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
  }
}
