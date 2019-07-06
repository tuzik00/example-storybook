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
    };

    static defaultProps = {
        renderDay: () => {},
        onEventClick: () => {},
    };

    render() {
        const {
            events,
            renderDay,
            onEventClick,
        } = this.props;

        return (
            <FullCalendar
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