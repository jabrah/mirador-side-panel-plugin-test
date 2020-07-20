import React from 'react';

const CustomButton = () => (
  <span id="custom-side-panel-b-button">🍕</span>
);
CustomButton.value = 'CustomKey2';

export default {
  target: 'WindowSideBarButtons',
  mode: 'add',
  component: CustomButton
};