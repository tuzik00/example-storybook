import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
	addonPanelInRight: true,
});

function loadStories() {
	require('../stories/index.js');
}

configure(loadStories, module);