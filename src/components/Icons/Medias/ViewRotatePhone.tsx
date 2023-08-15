import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ViewRotatePhone({
  id = 'ViewRotatePhoneIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M16.1508 2.88698C16.1715 2.86989 16.1994 2.84741 16.233 2.82662L16.2341 2.82595C16.2581 2.81135 16.2813 2.79964 16.3011 2.79015C16.3051 2.78725 16.3103 2.78366 16.3161 2.78002C16.328 2.77254 16.3448 2.76337 16.3661 2.75612L16.3712 2.75436C16.3888 2.74892 16.4042 2.74633 16.4155 2.74487L16.422 2.74208C16.4333 2.73711 16.4488 2.73122 16.4677 2.72689L16.471 2.72614L19.7791 2.0272C20.2319 1.93208 20.5982 2.21164 20.6828 2.61581C20.7691 3.0282 20.5056 3.4314 20.0948 3.51897L19.0036 3.74982C21.0748 5.0636 22.5064 7.19805 22.8841 9.72668C22.9463 10.143 22.659 10.5313 22.2426 10.5935C21.8263 10.6557 21.438 10.3684 21.3758 9.95201C21.0526 7.78829 19.7976 5.96904 17.9829 4.90133L18.2845 5.70178C18.4307 6.09471 18.2344 6.53478 17.8404 6.68378C17.786 6.70496 17.7316 6.71733 17.6822 6.72472C17.3347 6.77664 16.9871 6.58177 16.8562 6.24028L16.8558 6.23925L15.9096 3.72977C15.904 3.71202 15.9018 3.69638 15.9003 3.68536L15.8999 3.68153L15.8984 3.67815C15.894 3.66799 15.8886 3.654 15.8844 3.63696C15.8794 3.61732 15.878 3.60027 15.8776 3.58806C15.8774 3.58201 15.8775 3.57645 15.8776 3.57193C15.875 3.54735 15.8741 3.52268 15.8736 3.50959L15.8733 3.50206L15.8731 3.49808C15.8719 3.46221 15.8723 3.4236 15.8777 3.38074L15.8782 3.37708L15.8792 3.36972C15.8808 3.3569 15.8839 3.33344 15.8887 3.30946C15.8893 3.29712 15.8975 3.25544 15.8975 3.25544C15.9031 3.23474 15.9108 3.21823 15.917 3.20659C15.9201 3.20082 15.9232 3.19559 15.9258 3.19142C15.9366 3.16474 15.9494 3.13631 15.9666 3.10623C15.9666 3.10623 16.0117 3.0236 16.0508 2.97842C16.0854 2.93842 16.1508 2.88698 16.1508 2.88698Z"
        fill={fill}
      />
      <Path
        d="M16.7937 14.6032C17.1531 14.9627 17.1531 15.5455 16.7937 15.9049C16.4342 16.2643 15.8514 16.2643 15.492 15.9049C15.1326 15.5455 15.1326 14.9627 15.492 14.6032C15.8514 14.2438 16.4342 14.2438 16.7937 14.6032Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.42784 11.3491C3.70895 10.6302 3.70895 9.46463 4.42784 8.74574L9.63451 3.53907C10.3534 2.82018 11.5189 2.82018 12.2378 3.53907L21.3495 12.6507C22.0684 13.3696 22.0684 14.5352 21.3495 15.2541L16.1428 20.4607C15.4239 21.1796 14.2584 21.1796 13.5395 20.4607L4.42784 11.3491ZM10.9362 4.84074L5.72951 10.0474L14.8412 19.1591L20.0478 13.9524L10.9362 4.84074Z"
        fill={fill}
      />
      <Path
        d="M9.55114 21.1908C9.5848 21.17 9.61264 21.1475 9.63342 21.1304C9.63342 21.1304 9.69876 21.079 9.7334 21.039C9.77253 20.9938 9.81758 20.9112 9.81758 20.9112C9.83475 20.8811 9.84762 20.8526 9.8584 20.826C9.86099 20.8218 9.8641 20.8166 9.86718 20.8108C9.8734 20.7992 9.88104 20.7826 9.8867 20.7619C9.8867 20.7619 9.89489 20.7203 9.89549 20.7079C9.90031 20.6839 9.90335 20.6605 9.90501 20.6477L9.90602 20.6403L9.90648 20.6366C9.91186 20.5938 9.91228 20.5552 9.91108 20.5193L9.91086 20.5153L9.91056 20.5078C9.91008 20.4947 9.90917 20.47 9.90658 20.4455C9.90673 20.4409 9.90679 20.4354 9.9066 20.4293C9.90621 20.4171 9.90475 20.4001 9.89978 20.3804C9.89559 20.3634 9.89022 20.3494 9.88582 20.3392L9.88433 20.3359L9.88386 20.332C9.88243 20.321 9.88013 20.3054 9.87462 20.2876L8.92842 17.7781L8.92803 17.7771C8.79712 17.4356 8.44953 17.2407 8.10197 17.2927C8.05253 17.3001 7.99821 17.3124 7.94374 17.3336C7.54978 17.4826 7.35345 17.9227 7.49971 18.3156L7.80127 19.1161C5.98661 18.0483 4.73161 16.2291 4.40836 14.0654C4.34616 13.649 3.95789 13.3617 3.54155 13.4239C3.1252 13.4861 2.83787 13.8744 2.90007 14.2907C3.27783 16.8193 4.70941 18.9538 6.78059 20.2676L5.68935 20.4984C5.27858 20.586 5.01512 20.9892 5.10138 21.4016C5.18601 21.8057 5.55224 22.0853 6.00505 21.9902L9.31319 21.2912L9.31647 21.2905C9.33535 21.2862 9.35086 21.2803 9.36222 21.2753L9.36868 21.2725C9.37999 21.271 9.39541 21.2685 9.41294 21.263L9.41809 21.2613C9.43939 21.254 9.4562 21.2448 9.46812 21.2374C9.47392 21.2337 9.4791 21.2301 9.48312 21.2272C9.50288 21.2177 9.52608 21.206 9.55006 21.1914L9.55114 21.1908Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ViewRotatePhone;