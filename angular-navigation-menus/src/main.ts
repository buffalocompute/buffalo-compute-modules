import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import {
  provideFluentDesignSystem,
  fluentButton,
} from '@fluentui/web-components';

import { AppModule } from './app/app.module';

registerSwiperElements();
provideFluentDesignSystem().register(fluentButton());

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
