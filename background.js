let location = 'Austin';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ location });
  console.log('Default location set to Austin', `location: ${location}`);
});

chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
  }
});

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
});