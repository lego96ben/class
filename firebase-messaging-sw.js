importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// 請將下方的資料替換成你在 Firebase 控制台看到的「SDK 設定組合」
firebase.initializeApp({
  apiKey: "你的API金鑰",
  authDomain: "你的專案ID.firebaseapp.com",
  projectId: "你的專案ID",
  storageBucket: "你的專案ID.appspot.com",
  messagingSenderId: "你的發送者ID",
  appId: "你的AppID"
});

const messaging = firebase.messaging();

// 當手機在背景收到通知時的處理
messaging.onBackgroundMessage((payload) => {
  console.log('收到背景通知: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // 這裡要確保你有上傳一張 icon.png
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
