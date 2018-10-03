// @flow

import React, {PureComponent} from 'react'
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import Portal from '../Portal';
import Overlay from '../Overlay';
import FadeAndScale from '../Animations/FadeAndScale';

import style from './Modal.styl';


type PropsType = {
    children: React.Node,
    classNames: React.string,
    open?: boolean,
    maxWidth?: number,
    onClose: func
};

class Modal extends PureComponent<PropsType> {
    static defaultProps = {
        open: false,
        maxWidth: 500,
        onClose: () => {}
    };

    constructor(props: object) {
        super(props);

        this.state = {
            isOpen: this.props.open
        };
    }

    componentWillReceiveProps(nextProps: object) {
        if (this.state.isOpen !== nextProps.open) {
            this.setState({
                isOpen: nextProps.open
            })
        }
    }

    handleOutsideClick = () => {
        this.setState({
            isOpen: false
        });
    };

    render(): React.Element<'div'> {
        const {isOpen} = this.state;
        const {children, classNames, maxWidth, onClose} = this.props;

        return (
            <Portal selector="body">
                <OutsideClickHandler onOutsideClick={this.handleOutsideClick}>
                    <FadeAndScale
                        in={isOpen}
                        onExit={onClose}
                    >
                        <div
                            style={{maxWidth}}
                            className={cn(style.modal, classNames)}
                        >
                            {children}
                        </div>
                    </FadeAndScale>
                </OutsideClickHandler>
                <Overlay show={isOpen}/>
            </Portal>
        );
    }
}


export default Modal;
