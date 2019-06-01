import React, {PureComponent} from 'react'
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

import Portal from '../Portal';
import Overlay from '../Overlay';
import WidthScale from '../Animations/WidthScale';

import style from './Sidebar.styl';


class Sidebar extends PureComponent {
    static defaultProps = {
        open: false,
        width: 300,
        outsideClick: true,
        onClose: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.open,
            height: 0
        };
    }

    componentDidMount() {
        this.setSidebarSize();
        window.addEventListener('resize', this.setSidebarSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSidebarSize);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isOpen !== nextProps.open) {
            this.setState({
                isOpen: nextProps.open
            })
        }
    }

    handleOutsideClick = () => {
        if (!this.props.outsideClick){
            return;
        }

        this.setState({
            isOpen: false
        })
    };

    setSidebarSize = () => {
        this.setState({
            height: window.innerHeight
        });
    };

    render() {
        const {children, width, className, onClose} = this.props;
        const {height, isOpen} = this.state;

        return (
            <Portal selector="body">
                <OutsideClickHandler onOutsideClick={this.handleOutsideClick}>
                    <WidthScale
                        width={width}
                        in={isOpen}
                        onExit={onClose}
                    >
                        <div
                            style={{height}}
                            className={cn(style.sidebar, className)}
                        >
                            <div
                                className={style.content}
                                style={{width, height}}
                            >
                                {children}
                            </div>
                        </div>
                    </WidthScale>
                </OutsideClickHandler>

                <Overlay show={isOpen} />
            </Portal>
        );
    }
}


export default Sidebar;
