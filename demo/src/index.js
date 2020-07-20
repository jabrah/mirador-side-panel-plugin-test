import Mirador from 'mirador';
import CustomPanelPlugins from '../../src';

const config = {
  id: 'demo',
  window: {
    defaultView: 'single',
    sideBarOpenByDefault: true,
  },
  windows: [
    {
      loadedManifest: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest'
    }
  ]
};

Mirador.viewer(config, CustomPanelPlugins);
