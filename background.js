let location = 'Austin';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ location });
  console.log('Default location set to Austin', `location: ${location}`);
});

