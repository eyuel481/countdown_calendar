self.addEventListener('fetch', (event) => {
  // This is a basic shell to allow installation
});,
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/')); // Opens your app when clicked
});

// Listener for the background timer
self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NOTIFICATION') {
        const { title, body, delay } = event.data;
        setTimeout(() => {
            self.registration.showNotification(title, {
                body: body,
                icon: 'icon.png', // Make sure you have an icon file!
                badge: 'icon.png'
            });
        }, delay);
    }
});
