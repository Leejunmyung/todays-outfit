// Make sure we're in the service worker
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

// Set up Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// We need this in development mode
workbox.precaching.cleanupOutdatedCaches();

// Cache pages navigated to
workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'html-cache',
  }),
);

// Cache CSS and JavaScript files
workbox.routing.registerRoute(
  /.*\.(?:js)/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);

// Cache images
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);
