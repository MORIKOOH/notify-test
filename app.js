'use strict';

const notificationButton = document.getElementById('notification-button');

const notify = () => {
  let notification = new Notification('hello',
    {
      body: 'これはテストです'
    }
  );
};

notificationButton.addEventListener('click', notify, false);
