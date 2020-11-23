import React from 'react';
import { render } from '@testing-library/react-native';

import GradientConfig from '../GradientConfig';

describe('GradientConfig', () => {
  it('when gradient has three colors', () => {
    const { toJSON } = render(<GradientConfig id="GradientId" gradient="nebulosa" />);

    expect(toJSON()).toMatchInlineSnapshot(`
      <RNSVGLinearGradient
        gradient={
          Array [
            0,
            -2518560,
            0.5,
            -16726316,
            1,
            -16717216,
          ]
        }
        gradientTransform={null}
        gradientUnits={0}
        name="GradientId"
        x1="0"
        x2="1"
        y1="1"
        y2="0"
      />
    `);
  });

  it('when gradient has three colors', () => {
    const { toJSON } = render(<GradientConfig id="GradientId" gradient="sombrero" />);

    expect(toJSON()).toMatchInlineSnapshot(`
      <RNSVGLinearGradient
        gradient={
          Array [
            0,
            -12732949,
            1,
            -6491772,
          ]
        }
        gradientTransform={null}
        gradientUnits={0}
        name="GradientId"
        x1="0"
        x2="1"
        y1="1"
        y2="0"
      />
    `);
  });
});
