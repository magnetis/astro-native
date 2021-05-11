import { colors } from '@magnetis/astro-tokens';

const {
  earth200,
  earth500,
  uranus400,
  uranus500,
  uranus600,
  moon400,
  moon700,
  moon1000,
  venus400,
  venus700,
  mars300,
  mars400,
} = colors;

type Gradient = [string, string] | [string, string, string];

type GradientMap = {
  sombrero: Gradient;
  hoag: Gradient;
  pinwheel: Gradient;
  blackHole: Gradient;
  milkyWay: Gradient;
  whirlpool: Gradient;
  nebulosa: Gradient;
  andromeda: Gradient;
  centaurus: Gradient;
  cartwheel: Gradient;
  mayall: Gradient;
};

type GradientID = keyof GradientMap;

const gradients: GradientMap = {
  sombrero: [uranus400, earth200],
  hoag: ['#FFF56A', '#FFD265'],
  pinwheel: [moon400, '#bac8d1'],
  blackHole: [moon700, moon1000],
  milkyWay: [uranus500, venus400],
  whirlpool: [earth200, earth500],
  nebulosa: ['#d991e0', '#00c6d4', '#00ea60'],
  andromeda: [mars300, venus400],
  centaurus: [venus400, venus700],
  cartwheel: [uranus600, '#3db5eb'],
  mayall: [mars300, mars400],
};

export type { Gradient, GradientMap, GradientID };
export default gradients;
