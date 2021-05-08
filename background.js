let location = 'Austin';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ location });
  console.log('Default location set to Austin', `location: ${location}`);
});

chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
    // chrome.notifications.create('test', {
    //   type: 'basic',
    //   // iconUrl: 'images/1.png',
    //   title: 'Test Message',
    //   message: 'You are awesome!',
    //   priority: 2,
    //   eventTime: Date.now()
    // });
  }
});
