import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Path } from 'react-native-svg';

import BaseIcon from '../BaseIcon';

describe('BaseIcon', () => {
  it('when gradient is valid', () => {
    const { toJSON } = render(
      <BaseIcon id="BaseIcon" gradient="nebulosa">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 5C22.8513 5 28 10.1487 28 16.5C28 22.8513 22.8513 28 16.5 28C10.1487 28 5 22.8513 5 16.5C5 10.1487 10.1487 5 16.5 5ZM16.5 7.3C11.419 7.3 7.3 11.419 7.3 16.5C7.3 21.581 11.419 25.7 16.5 25.7C21.581 25.7 25.7 21.581 25.7 16.5C25.7 11.419 21.581 7.3 16.5 7.3ZM16.5 19.95C15.8649 19.95 15.35 20.4649 15.35 21.1C15.35 21.7351 15.8649 22.25 16.5 22.25C17.1351 22.25 17.65 21.7351 17.65 21.1C17.65 20.4649 17.1351 19.95 16.5 19.95ZM17.65 17.65C17.65 18.2851 17.1351 18.8 16.5 18.8C15.8649 18.8 15.35 18.2851 15.35 17.65V11.9C15.35 11.2649 15.8649 10.75 16.5 10.75C17.1351 10.75 17.65 11.2649 17.65 11.9V17.65Z"
          fill="red"
        />
      </BaseIcon>
    );

    expect(toJSON()).toMatchInlineSnapshot(`
      <RNSVGSvgView
        align="xMidYMid"
        bbHeight={32}
        bbWidth={32}
        focusable={false}
        height={32}
        meetOrSlice={0}
        minX={0}
        minY={0}
        style={
          Array [
            Object {
              "backgroundColor": "transparent",
              "borderWidth": 0,
            },
            Object {
              "flex": 0,
              "height": 32,
              "width": 32,
            },
          ]
        }
        vbHeight={32}
        vbWidth={32}
        width={32}
      >
        <RNSVGGroup>
          <RNSVGDefs>
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
              name="BaseIcon"
              x1="0"
              x2="1"
              y1="1"
              y2="0"
            />
          </RNSVGDefs>
          <RNSVGPath
            clipRule={0}
            d="M16.5 5C22.8513 5 28 10.1487 28 16.5C28 22.8513 22.8513 28 16.5 28C10.1487 28 5 22.8513 5 16.5C5 10.1487 10.1487 5 16.5 5ZM16.5 7.3C11.419 7.3 7.3 11.419 7.3 16.5C7.3 21.581 11.419 25.7 16.5 25.7C21.581 25.7 25.7 21.581 25.7 16.5C25.7 11.419 21.581 7.3 16.5 7.3ZM16.5 19.95C15.8649 19.95 15.35 20.4649 15.35 21.1C15.35 21.7351 15.8649 22.25 16.5 22.25C17.1351 22.25 17.65 21.7351 17.65 21.1C17.65 20.4649 17.1351 19.95 16.5 19.95ZM17.65 17.65C17.65 18.2851 17.1351 18.8 16.5 18.8C15.8649 18.8 15.35 18.2851 15.35 17.65V11.9C15.35 11.2649 15.8649 10.75 16.5 10.75C17.1351 10.75 17.65 11.2649 17.65 11.9V17.65Z"
            fill={4294901760}
            fillRule={0}
            propList={
              Array [
                "fill",
                "fillRule",
              ]
            }
          />
        </RNSVGGroup>
      </RNSVGSvgView>
    `);
  });

  it('when gradient is not valid', () => {
    const { toJSON } = render(
      <BaseIcon id="BaseIcon">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 5C22.8513 5 28 10.1487 28 16.5C28 22.8513 22.8513 28 16.5 28C10.1487 28 5 22.8513 5 16.5C5 10.1487 10.1487 5 16.5 5ZM16.5 7.3C11.419 7.3 7.3 11.419 7.3 16.5C7.3 21.581 11.419 25.7 16.5 25.7C21.581 25.7 25.7 21.581 25.7 16.5C25.7 11.419 21.581 7.3 16.5 7.3ZM16.5 19.95C15.8649 19.95 15.35 20.4649 15.35 21.1C15.35 21.7351 15.8649 22.25 16.5 22.25C17.1351 22.25 17.65 21.7351 17.65 21.1C17.65 20.4649 17.1351 19.95 16.5 19.95ZM17.65 17.65C17.65 18.2851 17.1351 18.8 16.5 18.8C15.8649 18.8 15.35 18.2851 15.35 17.65V11.9C15.35 11.2649 15.8649 10.75 16.5 10.75C17.1351 10.75 17.65 11.2649 17.65 11.9V17.65Z"
          fill="red"
        />
      </BaseIcon>
    );

    expect(toJSON()).toMatchInlineSnapshot(`
      <RNSVGSvgView
        align="xMidYMid"
        bbHeight={32}
        bbWidth={32}
        focusable={false}
        height={32}
        meetOrSlice={0}
        minX={0}
        minY={0}
        style={
          Array [
            Object {
              "backgroundColor": "transparent",
              "borderWidth": 0,
            },
            Object {
              "flex": 0,
              "height": 32,
              "width": 32,
            },
          ]
        }
        vbHeight={32}
        vbWidth={32}
        width={32}
      >
        <RNSVGGroup>
          <RNSVGPath
            clipRule={0}
            d="M16.5 5C22.8513 5 28 10.1487 28 16.5C28 22.8513 22.8513 28 16.5 28C10.1487 28 5 22.8513 5 16.5C5 10.1487 10.1487 5 16.5 5ZM16.5 7.3C11.419 7.3 7.3 11.419 7.3 16.5C7.3 21.581 11.419 25.7 16.5 25.7C21.581 25.7 25.7 21.581 25.7 16.5C25.7 11.419 21.581 7.3 16.5 7.3ZM16.5 19.95C15.8649 19.95 15.35 20.4649 15.35 21.1C15.35 21.7351 15.8649 22.25 16.5 22.25C17.1351 22.25 17.65 21.7351 17.65 21.1C17.65 20.4649 17.1351 19.95 16.5 19.95ZM17.65 17.65C17.65 18.2851 17.1351 18.8 16.5 18.8C15.8649 18.8 15.35 18.2851 15.35 17.65V11.9C15.35 11.2649 15.8649 10.75 16.5 10.75C17.1351 10.75 17.65 11.2649 17.65 11.9V17.65Z"
            fill={4294901760}
            fillRule={0}
            propList={
              Array [
                "fill",
                "fillRule",
              ]
            }
          />
        </RNSVGGroup>
      </RNSVGSvgView>
    `);
  });

  it('when icon does not have onPress', () => {
    const { getByTestId } = render(
      <BaseIcon id="BaseIcon" gradient="nebulosa" testID="BaseIcon">
        <Path fillRule="evenodd" clipRule="evenodd" d="M16.5" fill="red" />
      </BaseIcon>
    );

    expect(getByTestId('BaseIcon').props.hitSlop).toBeUndefined();
  });

  it('when icon has onPress', () => {
    const onPress = jest.fn();

    const { getByTestId } = render(
      <BaseIcon id="BaseIcon" gradient="nebulosa" testID="BaseIcon" onPress={onPress}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M16.5" fill="red" />
      </BaseIcon>
    );

    const baseIcon = getByTestId('BaseIcon');

    expect(baseIcon.props.hitSlop).toBeDefined();

    fireEvent.press(baseIcon);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('when icon has onPress and is too small', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <BaseIcon id="BaseIcon" gradient="nebulosa" testID="BaseIcon" width={16} height={'32'} onPress={onPress}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M16.5" fill="red" />
      </BaseIcon>
    );

    expect(getByTestId('BaseIcon').props.hitSlop).toStrictEqual({
      top: 8,
      bottom: 8,
      left: 16,
      right: 16,
    });
  });

  it('when icon has onPress and is too large', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <BaseIcon id="BaseIcon" gradient="nebulosa" testID="BaseIcon" width={'64'} height={48} onPress={onPress}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M16.5" fill="red" />
      </BaseIcon>
    );

    expect(getByTestId('BaseIcon').props.hitSlop).toStrictEqual({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    });
  });

  it('when icon has size prop', () => {
    const { getByTestId } = render(
      <BaseIcon id="BaseIcon" gradient="nebulosa" testID="BaseIcon" size={64}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M16.5" fill="red" />
      </BaseIcon>
    );

    expect(getByTestId('BaseIcon').props.width).toBe(64);
    expect(getByTestId('BaseIcon').props.height).toBe(64);
  });

  it('when icon has onPress and is too small but has hitSlop prop', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <BaseIcon
        id="BaseIcon"
        gradient="nebulosa"
        testID="BaseIcon"
        width={16}
        height={'32'}
        onPress={onPress}
        hitSlop={{
          bottom: 10,
          left: 10,
          right: 10,
          top: 10,
        }}
      >
        <Path fillRule="evenodd" clipRule="evenodd" d="M16.5" fill="red" />
      </BaseIcon>
    );

    expect(getByTestId('BaseIcon').props.hitSlop).toStrictEqual({ bottom: 10, left: 10, right: 10, top: 10 });
  });
});
