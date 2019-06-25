import React, {Component} from 'react';

import './HeadingInfoDecorator.styl';


class HeadingItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontSize: null,
            lineHeight: null,
            fontWeight: null
        };

        this.element = null;
    }

    componentDidMount() {
        this.getStyles();

        window.addEventListener('load', this.getStyles);
    };

    getStyles = () => {
        if (!this.element) {
            return;
        }

        const computedStyle = window.getComputedStyle(this.element);

        this.setState({
            fontSize: computedStyle.fontSize,
            lineHeight: computedStyle.lineHeight,
            fontWeight: computedStyle.fontWeight
        });
    };

    getDOMNode = (node) => {
        if (node) {
            this.element = node.children[0];
        }
    };

    render() {
        const {children, type} = this.props;
        const {fontSize, lineHeight, fontWeight} = this.state;

        return (
            <div>
                <div ref={this.getDOMNode}>
                    {children}
                </div>
                <ul className={'HeadingInfoDecorator'}>
                    <li>
                        fontSize: {fontSize}
                    </li>
                    <li>
                        lineHeight: {lineHeight}
                    </li>
                    <li>
                        fontWeight: {fontWeight}
                    </li>
                    <li>
                        mixin: heading{type}()
                    </li>
                </ul>
            </div>
        );
    }
}


const HeadingInfoDecorator = (props) => {
    const { children } = props;

    return children.map((child) => (
        <HeadingItem {...child.props}>
            {React.cloneElement(child)}
        </HeadingItem>
    ));
};


export default HeadingInfoDecorator;
