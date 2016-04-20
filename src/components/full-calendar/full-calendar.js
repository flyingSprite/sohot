import React, { Component, PropTypes } from 'react';
import 'fullcalendar/dist/fullcalendar.min.css';
import 'fullcalendar/dist/fullcalendar.min.js';
import $ from 'jquery';

class FullCalendar extends Component {
  componentDidMount() {
    const { calendar } = this.refs;
    var $calendar = $(calendar);
    $calendar.fullCalendar({
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'month,basicWeek,basicDay,agendaWeek,agendaDay'
      },
      customButtons: {
        myCustomButton: {
          text: '<span>custom!</span>',
            click: function() {
                alert('clicked the custom button!');
            }
        }
      },
      events: [
        {
            title: 'This is my works.',
            start: new Date(),
            description: 'cccccccc'
        }
      ],
      eventRender: function(event, element) {
        console.log('=======');
        console.log(event);
        console.log(element);
      },
      dayClick: (moment) => {
        console.log(moment.format('YYYY-MM-DD, h:mm:ss a'));

        // Next month
        $calendar.fullCalendar('next');
      }
    });

  }

  render() {
    return (
      <div ref="calendar" />
    );
  }
}

FullCalendar.propTypes = {
  events: PropTypes.array
};

export default FullCalendar;
