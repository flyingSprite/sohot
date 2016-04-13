import React, {Component} from 'react';
import 'fullcalendar/dist/fullcalendar.min.css';
import 'fullcalendar/dist/fullcalendar.min.js';
import $ from 'jquery';

class FullCalendar extends Component {
  componentDidMount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar();
  }

  render() {
    return (
      <div ref="calendar" />
    );
  }
}

export default FullCalendar;
