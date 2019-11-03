import { rem } from 'polished';

const SMALL_GRID_SIZE = 4
const BASE_GRID_SIZE = 8

enum Size {
  tiny = 4,
  extrasmall = 8,
  small = 16,
  base = 24,
  medium = 32,
  large = 48,
  huge = 56,
  extrahuge = 72,
  giant = 96,
}

export type SizeName = keyof typeof Size

export const sizes = {
  /** 4 */
  tiny: rem(Size.tiny),
  /** 8 */
  extrasmall: rem(Size.extrasmall),
  /** 16 */
  small: rem(Size.small),
  /** 24 */
  base: rem(Size.base),
  /** 32 */
  medium: rem(Size.medium),
  /** 48 */
  large: rem(Size.large),
  /** 56 */
  huge: rem(Size.huge),
  /** 72 */
  extrahuge: rem(Size.extrahuge),
  /** 96 */
  giant: rem(Size.giant),
  /** Genera tamaños en escala del grid pequeño */
  smallScale: (factor: number) => rem(factor * SMALL_GRID_SIZE),
  /** Genera tamaños en escala del grid base */
  baseScale: (factor: number) => rem(factor * BASE_GRID_SIZE),
}
