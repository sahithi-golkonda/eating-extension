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

// chrome.runtime.onMessage.addListener(data => {
//   if (data.type === 'notification') {
//     chrome.notifications.create('', data.options);
//     // chrome.notifications.create('test', {
//     //   type: 'basic',
//     //   // iconUrl: 'images/1.png',
//     //   title: 'Test Message',
//     //   message: 'You are awesome!',
//     //   priority: 2,
//     //   eventTime: Date.now()
//     // });
//   }
// });

// var Notification=(function(){
//   var notification=null;

//   return {
//       display:function(opt){
//           notification=chrome.notifications.create(opt);
//           notification.show();
//       },
//       hide:function(){
//           notification.close();
//       }
//   };
// })();

// chrome.browserAction.onClicked.addListener(function(windowId){
//   var opt = {
//       type: "basic",
//       title: "PixelsTech Website Statistic Viewer",
//       message: "1,000,000",
//       // iconUrl: "pixelstech.gif"
//   };
//   Notification.display(opt);
// });
