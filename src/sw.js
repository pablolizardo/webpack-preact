/**
 * Handling Offline Page fallback
 */
window.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
          event.respondWith(
            fetch(event.request.url).catch(error => {
                // Return the offline page
                return caches.match('/offline/');
            })
      );
    }
    else{
          // Respond with everything else if we can
          event.respondWith(caches.match(event.request)
                          .then(function (response) {
                          return response || fetch(event.request);
                      })
              );
        }
  });