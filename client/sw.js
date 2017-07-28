const counts = {
  installs: 0,
  activations: 0,
  fetches: 0
};

self.helloWorld = function helloWorld() {
  console.log('Hello world!!!!!');
}

self.addEventListener('install', (event) => {
  console.log('install',++counts.installs);
  return fetch('https://localhost:3000/asset-manifest.json', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((response) => {
      console.log('response from asset manifest', response.json());

    })
});

self.addEventListener('activate', () => {
  console.log('activate', ++counts.activations);
});

self.addEventListener('fetch', (event) => {
  console.log('fetch', ++counts.fetches);

  let acceptHeader = event.request.headers.get('accept');
  let requestUrl = new URL(event.request.url);
  if (counts.fetches % 10 == 0) {
    console.log(acceptHeader);
  }

  if (acceptHeader.indexOf('image/*') >= 0 && requestUrl.pathname.indexOf('/images/' ==0)) {
    console.log('this is a product image!');
  }
});