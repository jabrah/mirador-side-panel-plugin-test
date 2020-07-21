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


## Unresolved Issues

* How do we specify the tooltip for our custom button? As far as I can tell, our custom button will get wrapped in a component defined within Mirador which will look for a i18n key to put as the tooltip, keyed off of our button's "value." (https://github.com/ProjectMirador/mirador/blob/master/src/components/WindowSideBarButtons.js#L54-L66)
