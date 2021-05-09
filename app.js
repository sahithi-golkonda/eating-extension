// console.log('Greet bot!');

const button = document.createElement('button');
button.textContent = 'I\'m hungry!'
document.body.insertAdjacentElement('afterbegin', button);


// button.addEventListener('click', () => {
  
//   notifyMe();
  
// });

button.addEventListener('click', () => {
  
  notifyMeRestraurant();
  
});

// Listen
// chrome.alarms.onAlarm.addListener(function(alarm) {
//   if (alarm.name === 'cook') {
//       // Whatever you want
//       notifyMe();
//   }
// });

// function createAlarm() {
//   var now = new Date();
//   var day = now.getDate();
//   if (now.getHours() >= 20) {
//       // 3 AM already passed
//       day += 1;
//   }
//   // '+' casts the date to a number, like [object Date].getTime();
//   var timestamp = +new Date(now.getFullYear(), now.getMonth(), day, 20, 11, 0, 0);
//   //                        YYYY               MM              DD  HH MM SS MS

//   // Create
//   chrome.alarms.create('cook', {
//       when: timestamp
//   });
// }

// createAlarm();

function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {

    var notification = new Notification("Start cooking!!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Start cooking!!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

async function notifyMeRestraurant() {
  // get restraurant
  var requestOptions = {
    method: 'GET',
    headers: {"Authorization": "Bearer KZmYsVRbiqJSyL9mcTwWvgGdXEcv_GDMg18qmZep_1HAmlkzzXdNctyWwh_aFdt_qOAM8RSpRZls_LytXaMqo9EBojJkPakAO4jq1r2EkeAN1_yFDORS8K60b9uWYHYx"},
    redirect: 'follow'
  };

  let proxy = "https://limitless-retreat-60020.herokuapp.com/";
  let url = "https://api.yelp.com/v3/businesses/search?open_now=True&location="

  let jsonData = await fetch(proxy + url + "Austin", requestOptions);
  let data = await jsonData.json();
  let restaurants = await data["businesses"];
  let randomNum = Math.floor(Math.random() * restaurants.length);
  let restaurant = restaurants[randomNum];

  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {

    var notification = new Notification(restaurant["name"]);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(restaurant["name"]);
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}