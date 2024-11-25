import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.css'
})
export class GraphicDesignComponent {
  customOptions: OwlOptions ={
    items:1 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
  }
}
