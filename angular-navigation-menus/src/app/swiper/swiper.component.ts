import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './swiper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
  slides = [
    {
      imageSource: '/assets/BuffaloComputeSwiperOne.png',
      imageAlt: 'Buffalo Compute Swiper',
      title: 'Buffalo Compute',
      paragraph:
        'Buffalo Compute is a cloud computing platform that provides a suite of services for developers and businesses.',
      buttonText: 'Learn more',
    },
    {
      imageSource: '/assets/BuffaloComputeSwiperOne.png',
      imageAlt: 'Buffalo Compute Swiper',
      title: 'Buffalo Compute',
      paragraph:
        'Buffalo Compute is a cloud computing platform that provides a suite of services for developers and businesses.',
      buttonText: 'Learn more',
    },
  ];
}
