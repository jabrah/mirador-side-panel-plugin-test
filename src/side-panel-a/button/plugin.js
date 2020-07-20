import React from 'react';

const CustomButton = () => (
  <span id="custom-side-panel-a-button">😀</span>
);
CustomButton.value = 'CustomKey1';

export default {
  target: 'WindowSideBarButtons',
  mode: 'add',
  component: CustomButton
};