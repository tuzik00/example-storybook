import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';
import {CSSTransition} from 'react-transition-group';

import {
    Overlay,
    IconButton,
} from '../../..';

import { PushPin } from '../../../assets/icons';

import './LayoutSidebar.styl';


class LayoutSidebar extends Component {
    static propTypes = {
        isFixed: PropTypes.bool,
        isActive: PropTypes.bool,
        onToggle: PropTypes.func,
        children: PropTypes.func,
        dark: PropTypes.bool,
        isMobile: PropTypes.bool,
    };

    static defaultProps = {
        isFixed: false,
        isActive: false,
        isMobile: false,
        onToggle: () => {},
        dark: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: props.isActive,
            isFixed: props.isActive,
            isMount: !props.isMobile,
        };

        this.layoutSidebarRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isMount: true }), 0);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isActive !== prevProps.isActive) {
            this.setState({
                isActive: this.props.isActive,
                isMount: true,
            })
        }

        if (this.props.isMobile && this.state.isFixed) {
            this.setState({
                isFixed: false,
            })
        }
    }

    handleClose = () => {
        this.setState({
            isActive: false,
        }, () => {
            this.props.onToggle(false);
        });
    };

    render() {
        const {
            children,
            dark,
            isMobile,
        } = this.props;

        const {
            isActive,
            isFixed,
            isMount,
        } = this.state;

        return (
            <Fragment>
                {isMobile ? (
                    <Overlay
                        isShow={isActive}
                        onClick={this.handleClose}
                    />
                ) : null}

                <aside
                    style={{'display': !isMount ? 'none' : 'block'}}
                    className={cn(
                        'LayoutSidebar',
                        isMobile && 'LayoutSidebar_mobile',
                        isActive && 'LayoutSidebar_open',
                        dark && `LayoutSidebar_theme-dark`
                    )}
                    ref={this.layoutSidebarRef}
                >
                    <div className={'LayoutSidebar__content'}>
                        {children({ isActive, isMobile, isFixed })}
                    </div>
                </aside>
            </Fragment>
        );
    }
}


export default LayoutSidebar;
