import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Slick extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props) {
        super(props);

        this.state = {
            currentTop: 0,
            oldScrollTop: 0,
            initialSidebarTop: 0,
            isFixed: false,
        };

        this.sidebarRef = React.createRef();
        this.sidebarElement = null;
        this.parentElement = null;
        this.windowHeight = window.innerHeight;
    }

    componentDidMount() {
        this.sidebarElement = this.sidebarRef.current;
        this.parentElement = this.sidebarElement.parentNode;

        setTimeout(() => this.setState({
            initialSidebarTop: this.sidebarElement.getBoundingClientRect().top,
        }), 0);

        window.addEventListener('scroll', this.handleChangeScroll, false);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleChangeScroll, false);
    }

    handleChangeScroll = () => {
        if (!this.parentElement) {
            return;
        }

        const {
            oldParentTop,
            initialSidebarTop,
        } = this.state;

        let currentTop = this.state.currentTop;

        const parentClientRect = this.parentElement.getBoundingClientRect();
        const sidebarClientRect = this.sidebarElement.getBoundingClientRect();

        const parentHeight = parentClientRect.height;
        const sidebarHeight = sidebarClientRect.height;

        const parentTop = parentClientRect.top;
        const sidebarTop = sidebarClientRect.top;

        const scrollDirection = parentTop > oldParentTop ? 'up' : 'down';

        //Ловим прокрутку вниз
        if (scrollDirection === 'down') {
            const endPosition = parentHeight - sidebarHeight;
            const sidebarBottom = parentTop + sidebarHeight;
            const parentVisibilityHeight = this.windowHeight - initialSidebarTop;

            //Если высота сайдбара меньше контейнера
            if (sidebarHeight <= parentVisibilityHeight){
                //Ждем пока прокрутим до верхушки сайдбара
                if (sidebarTop <= 0){
                    currentTop = Math.abs(parentTop);
                }
            } else {
                //Если докрутили до конца сайдбара
                if (this.windowHeight - sidebarBottom > 0){
                    currentTop = this.windowHeight - sidebarBottom;
                }
            }

            // Если уперлись в контейнер
            if (currentTop >= endPosition){
                currentTop = endPosition;
            }
        }

        //Ловим прокрутку вверх
        if (scrollDirection === 'up') {
            // Если верхушка сайдбара поравнялась с верхушкой экрана
            if (Math.abs(parentTop) <= currentTop){
                currentTop = Math.abs(parentTop);
            }

            // Если уперлись в контейнер
            if (parentTop >= 0){
                currentTop = 0;
            }
        }

        this.setState({
            oldParentTop: parentTop,
            currentTop,
        });
    };

    render() {
        const {
            children,
        } = this.props;

        const {
            currentTop,
        } = this.state;

        return (
            <div
                style={{transform: `translateY(${currentTop}px)`}}
                ref={this.sidebarRef}
            >
                {children}
            </div>
        )
    }
}


export default Slick;
