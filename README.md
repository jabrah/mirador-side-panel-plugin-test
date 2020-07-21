# Custom Companion Window Plugins Test

Blatently take from the CompanionWindow test from Mirador (https://github.com/ProjectMirador/mirador/blob/master/__tests__/integration/mirador/plugins/companionWindow.html)

This demonstrates in a trivial way the ability to register more than one custom side panels. Please note that this is functional, but it produces Material UI errors in the JS console.

## Prerequisites 

* [Node.js](https://nodejs.org/en/) >= 8 must be installed
* [nwb](https://github.com/insin/nwb) install globally by running the command: `npm i -g nwb`

Make sure to install all of the repos dependencies: `npm i`

## Development

Note the helpful scripts defined in `package.json`.

You can run the demo app locally, defined in `demo/src/`, by running the command `npm start`. 

## Custom Panel notes

There are a couple of key takeaways that I found while putting this sample together.

* Any custom side panel will need a second plugin to define a custom `WindowSideBarButtons` button, or else there will be no UI element to toggle your new panel. 
* The custom panel MUST define a unique `companionWindowKey`. The new button to open your custom panel must then set its TabButton value to this key.
* Assuming you want to use this panel in a window sidebar, you should wrap your UI in a Mirador CompanionWindow to get its features and theme. See `side-panel-a` as a simple example


### Setting your button's tooltip

In order to get the tooltip to work for the custom window sidebar button, you need to inject a custom translation key in Mirador through your instance's configuration. 

* Your button plugin will define a `value`. In this repo's `side-panel-a` button, you can see: `CustomButton.value = 'CustomKey1';`
* That value is used in the translation key: `openCompanionWindow_<value>`, so in our case, the translation key becomes: `openCompanionWindow_CustomKey1`
* This translation key/value must be added to your Mirador intance's configuration

_MyButtonPlugin.js_
``` javascript
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
```

_index.js_
``` javascript
import Mirador from 'mirador';
import MyButtonPlugin from '<wherever_this_lives>';

const config = {
  id: 'demo',
  window: {
    defaultView: 'single',
    sideBarOpenByDefault: true,
  },
  windows: [
    {
      loadedManifest: '<your_manifest_here>'
    }
  ],
  translations: {
    en: {
      openCompanionWindow_CustomKey1: 'This is a moo'
    }
  }
};

Mirador.viewer(config, [ MyButtonPlugin ]);
```
