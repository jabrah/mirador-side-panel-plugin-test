import React, { Component } from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';

export default class CustomSidePanel extends Component {
  render() {
    const { id, windowId } = this.props;

    return (
      <CompanionWindow
        title="Custom SidePanel Plugin B"
        windowId={windowId}
        id={id}
      >
          <h1>This is a moo</h1>
      </CompanionWindow>
    );
  }
}
