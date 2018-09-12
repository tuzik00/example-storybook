// @flow

import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';

import Heading from '../src/components/Heading';
import Container from '../src/components/Container';
import HeadingInfo from '../src/storiesDecorators/HeadingInfo';


storiesOf('Типографика', module)
    .add('Заголовки', (): React.Element<'div'> => (
       <Container>
           <HeadingInfo>
               <Heading>h1. Heading</Heading>
               <Heading type="2">h2. Heading</Heading>
               <Heading type="3">h3. Heading</Heading>
               <Heading type="4">h4. Heading</Heading>
           </HeadingInfo>
       </Container>
    ))
    .add('Параграфы', (): React.Element<'div'> => (
        <Container>Параграфы</Container>
    ))
    .add('Статьи', (): React.Element<'div'> => (
        <Container>Статьи</Container>
    ));
