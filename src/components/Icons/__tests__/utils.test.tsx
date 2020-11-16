import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { cloneChildrenWithProps, getFill } from '../utils';

describe('Icons/Utils', () => {
  describe('cloneChildrenWithProps', () => {
    it('valid children', () => {
      const children = <View />;
      const props = {
        style: {
          backgroundColor: 'red',
        },
      };
      const childrenWithProps = cloneChildrenWithProps(children, props);

      expect(childrenWithProps[0].props).toEqual(expect.objectContaining({ style: { backgroundColor: 'red' } }));
    });

    it('invalid children', () => {
      const children = [null];
      const props = {
        style: {
          backgroundColor: 'red',
        },
      };
      const childrenWithProps = cloneChildrenWithProps(children, props);

      expect(childrenWithProps).toEqual([]);
    });
  });

  describe('getFill', () => {
    it('when gradient is valid', () => {
      expect(getFill({ gradient: 'sombrero', color: colors.uranus500, id: 'ID' })).toEqual('url(#ID)');
    });
    it('when gradient is not valid', () => {
      expect(getFill({ gradient: undefined, color: colors.uranus500, id: 'ID' })).toEqual(colors.uranus500);
    });
  });
});
