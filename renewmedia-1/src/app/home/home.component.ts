import { Component } from '@angular/core';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'web-home',
  standalone: true,
  imports: [HomeComponent, VideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
