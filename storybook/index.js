// if you use expo remove this line
import { AppRegistry } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-knobs/register';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('../src/stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  port: 7007,
  host: 'localhost',
  onDeviceUI: false,
  disableWebsockets: true,
  tabOpen: 2,
});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
