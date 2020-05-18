import React, { Component } from 'react';

export default class CustomSideButton extends Component {
  render() {
    const {TabButton, PluginComponents, dispatch, ...otherProps} = this.props;
    /**
     * 
     */
    return (
      <TabButton id="add-plugin-companion-window-button" {...otherProps} label="😀" value="CustomMooKey" />
    );
  }
}