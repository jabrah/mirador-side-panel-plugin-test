# custom-panel-test

Blatently take from this CompanionWindow test: https://github.com/ProjectMirador/mirador/commit/d07d14d1f19b4af3a61b82820ccc6715ee209620#diff-5f2d8244c08e22afcdeb6fa72fa082e6 expanded only slightly.

## Prerequisites 

* [Node.js](https://nodejs.org/en/) >= 8 must be installed
* [nwb](https://github.com/insin/nwb) install globally by running the command: `npm i -g nwb`

Make sure to install all of the repos dependencies: `npm i`

## Development

Note the helpful scripts defined in `package.json`.

You can run the demo app locally, defined in `demo/src/`, by running the command `npm start`. 

## Custom Panel notes

There are a couple of key takeaways that I found while putting this sample together. It is possible that some of my assumptions are incorrect.

* Any custom side panel will need a second plugin to define a custom `WindowSideBarButtons` button, or else there will be no UI element to toggle your new panel. 
* The custom panel MUST define a unique `companionWindowKey`. The new button to open your custom panel must then set its TabButton value to this key.

-----------------------

A bit off topic: The way I have the two plugins structured in this repo perhaps is not ideal, since they are not strictly tied together; even though both are necessary, they could be interpereted as independent. Perhaps a better project layout could be:

```
my-custom-side-panel/
  |- panel/
  |   |- plugin.js
  |   ...
  |- button/
  |   |- plugin.js
  |   ...
  |- index.js
  ...
```

This scheme has an implicit link between the panel implementation and the associated button while keeping the flexibility of defining other plugins if nescessary? Of course, it would probably be better to simply create a new repo if you want to create another plugin.
