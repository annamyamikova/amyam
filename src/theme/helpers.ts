import { breakpoints } from '../theme';

export const mediaDown = (breakpoint: keyof typeof breakpoints | number): string =>
  `@media (max-width: ${
    typeof breakpoint === 'number' ? breakpoint : breakpoints[breakpoint] - 1
  }px)`;

export const mediaUp = (breakpoint: keyof typeof breakpoints | number): string =>
  `@media (min-width: ${typeof breakpoint === 'number' ? breakpoint : breakpoints[breakpoint]}px)`;
