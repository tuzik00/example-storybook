// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';

import Container from '../src/components/Container';

import Compare from '../src/assets/icons/compare.svg';
import Configurator from '../src/assets/icons/configurator.svg';
import Confirm from '../src/assets/icons/confirm.svg';
import Payment from '../src/assets/icons/payment.svg';
import People from '../src/assets/icons/people.svg';
import Podbor from '../src/assets/icons/podbor.svg';
import QRCode from '../src/assets/icons/QR-code.svg';
import Search from '../src/assets/icons/search.svg';


storiesOf('Иконки (svg)', module)
    .add('Перечень', (): React.Element<'Container'> => {
        return (
            <Container>
                <Compare />
                <Configurator />
                <Confirm />
                <Payment />
                <People />
                <Podbor />
                <QRCode />
                <Search />
            </Container>
        );
    });
