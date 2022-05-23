export default async function startMocking() {
  const { worker } = require('./browser');
  worker.start({
    serviceWorker: {
      url: '/react-shopping-cart/mockServiceWorker.js',
    },
  });
}
