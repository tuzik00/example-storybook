// @flow

import React, {Component, Fragment, cloneElement} from 'react';
import style from './HeadingInfo.styl';


type HeadingItemPropsType = {
    children?: React.Node,
    type: string
};

class HeadingItem extends Component<HeadingItemPropsType> {
    constructor(props: object) {
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

    getDOMNode = (node: React.Node) => {
        if (node) {
            this.element = node.children[0];
        }
    };

    render(): React.Element<'div'> {
        const {children, type} = this.props;
        const {fontSize, lineHeight, fontWeight} = this.state;

        return (
            <div>
                <div ref={this.getDOMNode}>
                    {children}
                </div>
                <ul className={style.list}>
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


type HeadingInfoPropsType = {
    children: React.Node
};

const HeadingInfo = (props: HeadingInfoPropsType): React.Element<'div'> => {
    return (
        <Fragment>
            {props.children.map((child: Ract.Node): React.Element<'HeadingItem'> => (
                <HeadingItem {...child.props}>{cloneElement(child)}</HeadingItem>
            ))}
        </Fragment>
    );
};

export default HeadingInfo;
