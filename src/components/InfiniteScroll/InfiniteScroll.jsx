import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from 'react-virtualized';

import './InfiniteScroll.styl';


class InfiniteScroll extends PureComponent {
    static propTypes = {
        cacheName: PropTypes.string,
        className: PropTypes.string,
        listSize: PropTypes.number.isRequired,
        renderRow: PropTypes.func.isRequired,
        threshold: PropTypes.number,
        currentPage: PropTypes.number,
        onLoadMore: PropTypes.func,
        scrollTop: PropTypes.number,
        totalPages: PropTypes.number,
        defaultRowHeight: PropTypes.number,
        onScroll: PropTypes.func,
        initialTopOffset: PropTypes.number,
        isLoading: PropTypes.bool,
    };

    static defaultProps = {
        threshold: 0,
        currentPage: 1,
        totalPages: 0,
        cacheName: 'default',
        defaultRowHeight: 500,
        initialTopOffset: 150,
        onLoadMore: () => {},
        onScroll: () => {},
    };


    constructor(props) {
        super(props);

        this.state = {
            scrollTop: props.scrollTop,
            nextPage: props.currentPage,
            prevPage: props.currentPage,
            isPageChange: false,
            isPrevPage: false, // флаг для предотвращения несанкционированной загрузки предыдущей страницы
        };

        this.cache = {};
        this.virtualScrollRef = React.createRef();
        this.eventsOn = _.debounce(() => this.setState({isScrolling: false}), 500);
        this.eventsOff = () => this.setState({isScrolling: true});
    }


    componentDidMount() {
        if (this.props.currentPage !== 1) {
            setTimeout(() => {
                this.virtualScrollRef.current.scrollToPosition(this.props.initialTopOffset);
            }, 0);
        }
    }


    componentDidUpdate(prevProps) {
        if (this.props.cacheName !== prevProps.cacheName) {
            this.getCache().clearAll();
            this.virtualScrollRef.current.forceUpdateGrid();
        }

        if (this.state.isPrevPage && this.state.prevPage === this.props.currentPage){
            this.setPrevPageScrollPosition(prevProps.listSize);
        }
    }

    setPrevPageScrollPosition(prevListSize){
        const cache = this.getCache();
        const listSize = this.props.listSize - prevListSize; //

        const calcListHeight = (height, index) =>
            index > listSize
                ? result
                : height + cache.getHeight(index);

        const scrollTop = _
            .chain(listSize)
            .range()
            .reduce(calcListHeight, 0)
            .value();

        if (!scrollTop) {
            return;
        }

        this.setState({
            isPrevPage: false,
        }, () => this.virtualScrollRef.current.scrollToPosition(scrollTop));
    }

    getCache(cacheName = this.props.cacheName) {
        if (!this.cache[cacheName]) {
            this.cache[cacheName] = new CellMeasurerCache({
                defaultHeight: this.props.defaultRowHeight,
                fixedWidth: false,
            });
        }

        return this.cache[cacheName];
    }

    onScroll = ({ scrollTop, scrollHeight, clientHeight }) => {
        const {
            threshold,
            onScroll,
            isLoading,
        } = this.props;

        const {
            isPageChange,
        } = this.state;

        if (isPageChange && !isLoading) {
            if (scrollTop === 0) {
                this.loadMorePrev();
            }

            if ((scrollTop - scrollHeight + clientHeight) + threshold >= 0) {
                this.loadMoreNext();
            }
        }

        this.eventsOn();
        this.eventsOff();

        this.setState({
            scrollTop,
        }, () => onScroll({scrollTop, scrollHeight, clientHeight}));
    };

    loadMorePrev() {
        const {
            prevPage,
        } = this.state;

        const {
            onLoadMore,
        } = this.props;

        if (prevPage <= 1) {
            return;
        }

        const page = prevPage - 1;

        this.setState({
            prevPage: page,
            isPageChange: false,
            isPrevPage: true,
        }, () => onLoadMore(page));
    }

    loadMoreNext() {
        const {
            totalPages,
            onLoadMore,
        } = this.props;

        const {
            nextPage,
        } = this.state;

        if (nextPage >= totalPages) {
            return;
        }

        const page = nextPage + 1;

        this.setState({
            nextPage: page,
            isPageChange: false,
        }, () => onLoadMore(page));
    }

    renderRow = ({ index, key, parent, style, isScrolling, isVisible }) => {
        if (!this.state.isPageChange) {
            this.setState({ isPageChange: true });
        }

        return (
            <CellMeasurer
                key={key}
                columnIndex={0}
                overscanRowCount={0}
                cache={this.getCache()}
                parent={parent}
                rowIndex={index}
            >
                <div
                    key={key}
                    style={style}
                >
                    {this.props.renderRow({ index, isScrolling, isVisible })}
                </div>
            </CellMeasurer>
        );
    };

    render() {
        const {
            listSize,
            className,
        } = this.props;

        const {
            isScrolling,
            scrollTop,
        } = this.state;

        const cache = this.getCache();

        const classNames = cn(
            className,
            'InfiniteScroll__scroll', {
                'InfiniteScroll_scrolling': isScrolling,
            },
        );

        return (
            <div className={'InfiniteScroll'}>
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            ref={this.virtualScrollRef}
                            height={height}
                            width={width}
                            scrollTop={scrollTop}
                            className={classNames}
                            rowCount={listSize}
                            deferredMeasurementCache={cache}
                            rowHeight={cache.rowHeight}
                            rowRenderer={this.renderRow}
                            onScroll={this.onScroll}
                        />
                    )}
                </AutoSizer>
            </div>
        );
    }
}


export default InfiniteScroll;
