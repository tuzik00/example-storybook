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
        data: PropTypes.array,
        renderDay: PropTypes.func,
    };

    static defaultProps = {
        renderDay: () => {
        },
    };

    render() {
        const {
            data,
            renderDay,
        } = this.props;

        return (
            <FullCalendar
                events={data}
                locale={ruLocale}
                defaultView="dayGridMonth"
                plugins={[
                    dayGridPlugin
                ]}
                dayRender={renderDay}
            />
        )
    }

}


export default FullCalendarWrapper