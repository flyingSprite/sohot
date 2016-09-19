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
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
            eventData = {
                title: title,
                start: start,
                end: end
            };
            $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
       $calendar.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
            title: 'This is my works.',
            start: new Date(),
            description: 'cccccccc'
        },{
                    title: 'Meeting',
                    start: '2016-04-12T10:30:00',
                    end: '2016-04-13T12:30:00'
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
        // $calendar.fullCalendar('next');
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
