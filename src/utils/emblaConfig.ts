import { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const emblaOptionsNoDrag: EmblaOptionsType = { loop: true, speed: 10, align: 1 };
export const emblaOptionsDrag: EmblaOptionsType = {
  loop: true,
  speed: 10,
  align: 1,
  inViewThreshold: 0,
  dragFree: true
};
// export const emblaPlugin = Autoplay({ delay: 2000, stopOnInteraction: false });
