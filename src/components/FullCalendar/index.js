// https://fullcalendar.io/docs/theming

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from '@fullcalendar/core/locales/ru';
import '@fullcalendar/core/main.css'
import './FullCalendar.styl';


class FullCalendarWrapper extends Component {
    static propTypes = {
        events: PropTypes.array,
        onEventClick: PropTypes.func,
        onDateClick: PropTypes.func,
        onDateSelect: PropTypes.func,
        onDateUnselect: PropTypes.func,
        ref: PropTypes.func,
    };

    static defaultProps = {
        events: [],
        getApi: () => {},
        onEventClick: () => {},
        onDateUnselect: () => {},
    };

    constructor(props) {
        super(props);

        this.calendarRef = React.createRef();
    }

    componentDidMount() {
        const calendarApi = this.calendarRef.current;

        this.props.getApi(calendarApi.calendar)
    }

    render() {
        const {
            events,
            onEventClick,
            onDateSelect,
            onDateUnselect,
        } = this.props;

        return (
            <FullCalendar
                ref={this.calendarRef}
                events={events}
                locale={ruLocale}
                unselectAuto={false}
                defaultView="dayGridMonth"
                plugins={[
                    dayGridPlugin,
                    interactionPlugin
                ]}
                eventClick={(e) => {
                    e.jsEvent.preventDefault();
                    onEventClick(e);
                }}
                selectable={!!onDateSelect}
                select={onDateSelect}
                unselect={onDateUnselect}
            />
        )
    }

}


export default FullCalendarWrapper