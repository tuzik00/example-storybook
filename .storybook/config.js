import {configure, setAddon, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {withKnobs} from '@storybook/addon-knobs';
import addWithDoc from 'storybook-addon-props';

import GlobalStyleDecorator from './storiesDecorators/GlobalStyleDecorator';
// import MainDecorator from './storiesDecorators/MainDecorator';


setOptions({
    addonPanelInRight: true
});

setAddon(addWithDoc);

addDecorator(withKnobs);
// addDecorator(MainDecorator);
addDecorator(GlobalStyleDecorator);


const req = require.context('./stories', true, /\.stories.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}


configure(loadStories, module);
