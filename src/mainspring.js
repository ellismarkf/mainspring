import React, { Component } from 'react';

export default class Mainspring extends Component {
  getStateAndHelpers = () => ({
    today: new Date(),
    selectedDate: '',
    isOpen: false,
    defaultSelectedDate: ''
  })
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}