import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import ruLocale from '@fullcalendar/core/locales/ru';
import '@fullcalendar/core/main.css'
import './FullCalendar.styl';


class FullCalendarWrapper extends Component {
    static propTypes = {

    };

    render() {
        return (
            <FullCalendar
                locale={ruLocale}
                defaultView="dayGridMonth"
                plugins={[
                    dayGridPlugin
                ]}
            />
        )
    }

}


export default FullCalendarWrapper