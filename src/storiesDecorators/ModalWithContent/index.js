// @flow

import React, {PureComponent} from 'react'

import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Content from '../../components/Content';
import Heading from '../../components/Heading';
import Container from '../../components/Container';


class SidebarWithContent extends PureComponent {
    state = {
        isOpen: false
    };

    render(): React.Element<'div'> {
        return (
            <Container>
                <Button onClick={(): void => this.setState({isOpen: true})}>Открыть</Button>
                <Modal
                    open={this.state.isOpen}
                    onClose={(): void => this.setState({isOpen: false})}
                >
                    <Container>
                        <Heading type="3">
                            Форт-Росс
                        </Heading>
                        <Content>
                            Это русское поселение на побережье Северной Калифорнии (США), в 80 км к северу от
                            Сан-Франциско,
                            основано в 1812 году Российско-Американской компанией для промысла и торговли пушниной.
                            Крепость
                            Росс была самым южным русским поселением в Северной Америке. В 1841 году компания продала
                            свою
                            собственность крупному землевладельцу Джону Саттеру[2]. В настоящее время это исторический
                            парк
                            штата Калифорния, Национальный исторический памятник США.
                        </Content>
                        <Content>
                            Единственное оригинальное строение, сохранившееся до наших дней, — дом последнего русского
                            коменданта Ротчева — объявлено объектом исторической ценности национального значения.
                            Остальные
                            строения являются реконструкцией, тем не менее форт является единственной деревянной
                            крепостью
                            Российской Империи XIX века, дошедшей до нас
                        </Content>
                        <Content>
                            В обиходе и научных трудах крепость Росс сегодня часто именуют американизированным названием
                            Форт-Росс, что не вполне корректно с точки зрения истории: в XIX веке русские называли это
                            поселение
                            крепостью Росс (а также — колонией Росс или же селением Росс)[4][5]. А название Fort Ross
                            является
                            буквальным переводом на английский язык русского названия крепость Росс.
                        </Content>
                        <Content>
                            <Button onClick={(): void => this.setState({isOpen: false})}>Закрыть</Button>
                        </Content>
                    </Container>
                </Modal>
            </Container>
        );
    }
}

export default SidebarWithContent;
