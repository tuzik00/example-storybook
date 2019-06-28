import React from 'react';
import {storiesOf} from '@storybook/react';

import {Img} from '../../src';


storiesOf('Картинки', module)
    .add('Tag', () => (
        <Img
            asImage
            alt={'Img'}
            src={'https://dummyimage.com/300x300/000000/ffffff.png'}
        />
    ))
    .add('Background', () => (
        <Img
            alt={'Img'}
            src={'https://dummyimage.com/300x300/000000/ffffff.png'}
        />
    ));
