import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';

import Portal from '../Portal';
import Overlay from '../Overlay';
import FadeAndScale from '../Animations/FadeAndScale';

import './Modal.styl';


class Modal extends PureComponent {
    static propTypes = {
        isOpen: PropTypes.bool,
        onClose: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func,
        ]),
        position: PropTypes.oneOf([
            'center',
            'left',
            'right',
            'top',
            'bottom',
        ]),
        isOverlay: PropTypes.bool,
    };

    static defaultProps = {
        isOpen: false,
        isOverlay: true,
        position: 'center',
        onClose: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    componentDidMount() {
        this.setState({
            isOpen: this.props.isOpen,
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            this.setState({
                isOpen: this.props.isOpen
            })
        }
    }

    handleOutsideClick = () => {
        this.setState({
            isOpen: false
        }, this.props.onClose);
    };

    render() {
        const {
            isOpen,
        } = this.state;

        const {
            children,
            className,
            onClose,
            position,
            isOverlay,
        } = this.props;

        const child = typeof children === 'function'
            ? children(this.handleOutsideClick)
            : children;

        return (
            <Portal selector="body">
                <FadeAndScale
                    in={isOpen}
                    onExit={onClose}
                >
                    <div className={cn(className,
                        'Modal',
                        !!position && `Modal_position_${position}`
                    )}>
                        {child}
                    </div>
                </FadeAndScale>

                {isOverlay ? (
                    <Overlay
                        onClick={this.handleOutsideClick}
                        isShow={isOpen}
                    />
                ) : null}
            </Portal>
        );
    }
}


export default Modal;
