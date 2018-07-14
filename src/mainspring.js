import React, { Component } from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

export default class Mainspring extends Component {
  static propTypes = {
    children: PropTypes.func
  }
  getStateAndHelpers = () => ({
    today: DateTime.local(),
    selectedDate: '',
    isOpen: false,
    defaultSelectedDate: ''
  })
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}