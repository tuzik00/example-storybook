import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import MainDecorator from '../src/storiesDecorators/MainDecorator';


setDefaults({
    header: false
});

setOptions({
	addonPanelInRight: true
});


addDecorator((story, context) => withInfo()(story)(context));
addDecorator(withKnobs);
addDecorator(MainDecorator);


function loadStories() {
    // require('../stories/Text.js');
    // require('../stories/Colors.js');
    // require('../stories/Forms.js');
    require('../stories/Button.js');
    // require('../stories/ExampleForm.js');
    // require('../stories/Grid.js');
    // require('../stories/Navigation.js');
    // require('../stories/Modals.js');
    // require('../stories/Cards.js');
}

configure(loadStories, module);