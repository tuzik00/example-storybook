// @flow

import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Heading from '../src/components/Heading';
import Container from '../src/components/Container';
import Content from '../src/components/Content';
import { List, ListItem } from '../src/components/List';

import HeadingInfo from '../src/storiesDecorators/HeadingInfo';


storiesOf('Типографика', module)
    .add('Заголовки', withInfo()((): React.Element<'div'> => (
        <Container>
            <HeadingInfo>
                <Heading>h1. Heading</Heading>
                <Heading type="2">h2. Heading</Heading>
                <Heading type="3">h3. Heading</Heading>
                <Heading type="4">h4. Heading</Heading>
                <Heading type="5">h5. Heading</Heading>
                <Heading type="6">h6. Heading</Heading>
            </HeadingInfo>
        </Container>
    )))
    .add('Параграфы', withInfo()((): React.Element<'div'> => (
        <Container>
            <div>
                <Content>
                    Это русское поселение на побережье Северной Калифорнии (США), в 80 км к северу от Сан-Франциско,
                    основано в 1812 году Российско-Американской компанией для промысла и торговли пушниной. Крепость
                    Росс была самым южным русским поселением в Северной Америке. В 1841 году компания продала свою
                    собственность крупному землевладельцу Джону Саттеру[2]. В настоящее время это исторический парк
                    штата Калифорния, Национальный исторический памятник США.
                </Content>
                <Content>
                    Единственное оригинальное строение, сохранившееся до наших дней, — дом последнего русского
                    коменданта Ротчева — объявлено объектом исторической ценности национального значения. Остальные
                    строения являются реконструкцией, тем не менее форт является единственной деревянной крепостью
                    Российской Империи XIX века, дошедшей до нас
                </Content>
                <Content>
                    В обиходе и научных трудах крепость Росс сегодня часто именуют американизированным названием
                    Форт-Росс, что не вполне корректно с точки зрения истории: в XIX веке русские называли это поселение
                    крепостью Росс (а также — колонией Росс или же селением Росс)[4][5]. А название Fort Ross является
                    буквальным переводом на английский язык русского названия крепость Росс.
                </Content>
            </div>
        </Container>
    )))
    .add('Списки', withInfo()((): React.Element<'div'> => (
        <Container>
            <List dotted>
                <ListItem>
                    Часовня Святой Троицы (1825) в северо-восточном углу крепости, воздвигнута на месте небольшой
                    колокольни и пристроена к укреплениям. В настоящее время в часовне нерегулярно проводятся
                    православные богослужения.
                </ListItem>
                <ListItem>
                    Дом Ивана Кускова (существовал уже в 1820) — служил резиденцией всем начальникам поселения,
                    кроме Ротчева. В одной из комнат дома находился арсенал.
                </ListItem>
                <ListItem>
                    Контора
                </ListItem>
                <ListItem>
                    Дом Александра Ротчева (1836) — единственное сохранившееся в крепости оригинальное здание XIX
                    века. По свидетельству одного из гостей, в доме находилась богатая библиотека и стояло
                    фортепьяно.
                </ListItem>
            </List>
        </Container>
    )));
