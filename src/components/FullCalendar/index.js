// https://fullcalendar.io/docs/theming

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import ruLocale from '@fullcalendar/core/locales/ru';
import '@fullcalendar/core/main.css'
import './FullCalendar.styl';


class FullCalendarWrapper extends Component {
    static propTypes = {
        events: PropTypes.array,
        renderDay: PropTypes.func,
        onEventClick: PropTypes.func,
        onDateClick: PropTypes.func,
        defaultActive: PropTypes.string,
    };

    static defaultProps = {
        renderDay: (e) => e,
        onEventClick: () => {
        },
    };

    constructor(props) {
        super(props);

        this.calendarRef = React.createRef();
    }

    componentDidMount() {
        const calendarApi = this.calendarRef.current;

        if (!calendarApi) {
            return;
        }
        calendarApi.elRef.current.addEventListener('click', this.handleClickDate);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.defaultActive){
            this.setActiveDate(this.props.defaultActive);
        }
    }


    handleClickDate = (e) => {
        const {
            onDateClick,
        } = this.props;

        if (!onDateClick) {
            return;
        }

        const element = e.target.closest('.fc-day-top') || e.target;

        if (element && element.hasAttribute('data-date')) {
            const date = element.getAttribute('data-date');

            onDateClick(date);
            this.setActiveDate(date);
        }
    };

    setActiveDate(defaultActive = this.props.defaultActive) {
        const activeClass = 'FullCalendar__active-date';
        const el = this.calendarRef.current.elRef.current;
        const activeElements = el.querySelectorAll(`.${activeClass}`);
        const td = el.querySelectorAll(`[data-date="${defaultActive}"]`);

        activeElements.forEach((el) => el.classList.remove(activeClass));
        td.forEach((el) => el.classList.add(activeClass));
    }


    render() {
        const {
            events,
            renderDay,
            onEventClick,
        } = this.props;

        return (
            <FullCalendar
                ref={this.calendarRef}
                events={events}
                locale={ruLocale}
                defaultView="dayGridMonth"
                plugins={[
                    dayGridPlugin
                ]}
                eventClick={(info) => {
                    info.jsEvent.preventDefault();
                    onEventClick(info.event);
                }}
                dayRender={renderDay}
            />
        )
    }

}


export default FullCalendarWrapper