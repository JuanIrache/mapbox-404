import mapboxgl from 'mapbox-gl';
import key from './key';

mapboxgl.accessToken = key;

const slave = new mapboxgl.Map({
  container: 'div2',
  style: {
    version: 8,
    name: 'Depth tiles',
    layers: [
      {
        id: 'lorem',
        type: 'raster',
        source: 'depth-tiles'
      }
    ],
    sources: {
      'depth-tiles': {
        type: 'raster',
        url: 'mapbox://mapbox.terrain-rgb'
      }
    }
  },
  trackResize: false,
  interactive: false,
  preserveDrawingBuffer: true
});

slave.on('idle', () => console.log('Map is idle. Continue with other stuff'));
slave.on('error', () =>
  console.log(
    'If idle does not fire, at least this should so we can continue working'
  )
);

setTimeout(() => {
  slave.setZoom(14);
  slave.setCenter({
    lng: 27.99211370672353,
    lat: -53.75733749767177
  });
  console.log('set new coordinates');
}, 1000);

setTimeout(() => {
  slave.setCenter({
    lng: 28.00239616386898,
    lat: -53.75239988543803
  });
  console.log('set new coordinates');
}, 3000);
