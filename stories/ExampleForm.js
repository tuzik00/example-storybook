// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import ExampleForm from '../src/storiesDecorators/ExampleForm';



storiesOf('Форма', module)
    .addDecorator(withKnobs)
    .add('Пример формы', withInfo()((): React.Element<'ExampleForm'> => (
        <ExampleForm/>
    )));
