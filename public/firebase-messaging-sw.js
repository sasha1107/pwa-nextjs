importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBmfCJYmKqXCaqkGaZ0TM6l-BuapxJjD1w",
  authDomain: "pwa-push-452e2.firebaseapp.com",
  projectId: "pwa-push-452e2",
  storageBucket: "pwa-push-452e2.appspot.com",
  messagingSenderId: "384025187882",
  appId: "1:384025187882:web:e742b51313c1df38eed553",
  measurementId: "G-NBYX64L7EQ",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification.title + " (onBackgroundMessage)";
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://avatars.githubusercontent.com/sasha1107",
  };

  self.registration.showNotification(title, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  const redirectUrl = event?.notification?.data?.redirectUrl;

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        for (const client of clientList) {
          if (client.url === redirectUrl && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(redirectUrl);
        }
      })
  );
});
