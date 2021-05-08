
// Initialize button with user's preferred color
let showRestaurant = document.getElementById("showRestaurant");

chrome.storage.sync.get("location", ({ location }) => {
    showRestaurant.style.backgroundColor = "#32a852";
    // console.log(location);
});

showRestaurant.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getRestaurant,
    });
});

async function getRestaurant() {
    chrome.storage.sync.get("location", async ({ location }) => {
        // use location to get restaurant
        // window.alert(restaurant)
        // window.alert("location");
        // console.log('hello');

        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Bearer KZmYsVRbiqJSyL9mcTwWvgGdXEcv_GDMg18qmZep_1HAmlkzzXdNctyWwh_aFdt_qOAM8RSpRZls_LytXaMqo9EBojJkPakAO4jq1r2EkeAN1_yFDORS8K60b9uWYHYx");

        // var requestOptions = {
        //     method: 'GET',
        //     headers: {"Authorization": "Bearer KZmYsVRbiqJSyL9mcTwWvgGdXEcv_GDMg18qmZep_1HAmlkzzXdNctyWwh_aFdt_qOAM8RSpRZls_LytXaMqo9EBojJkPakAO4jq1r2EkeAN1_yFDORS8K60b9uWYHYx"},
        //     redirect: 'follow'
        // };

        // let jsonData = await fetch("https://api.yelp.com/v3/businesses/search?location=Austin", requestOptions);
        // let data = await jsonData.json();
        // let restaurant = await data["businesses"][0]["name"];

        // fetch("https://api.yelp.com/v3/businesses/search?location=Austin", requestOptions)
        // .then(response => response.json())
        // .then(result => window.alert(result["businesses"][0]["name"]))
        // .catch(error => window.alert(error));

        // let restaurants = restaurants.json();
        // let jsonData = await fetch("./restaurants.json");
        // .then(response => {return response.json();})
        // .then(data => window.alert(data["businesses"][0]["name"]));
        // let restaurant = restaurants["businesses"][0]["name"];

        let jsonData = await fetch("./restaurants.json");
        let data = (await jsonData.json())["businesses"][0]["name"];
        window.alert("Arlo's Burgers");
        // window.alert(restaurant);
        
        // .then(response => response.json())
        // .then(result => result["businesses"][0]["name"])
        // .catch(error => console.log('error', error));
        // // document.body.style.backgroundColor = color;

        // let returnedData = "none";

        // const fetch = require("fetch");

        
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(data => window.alert(data[0]["name"]));

        // let jsonData = await fetch('https://jsonplaceholder.typicode.com/users');
        // let data = (await jsonData.json())[0]["name"];
        // window.alert(data);

        // var axios = require('axios');

        // window.alert(returnedData);


        // var config = {
        //     method: 'get',
        //     url: 'https://api.yelp.com/v3/businesses/search?location=Austin',
        //     headers: { 
        //         'Authorization': 'Bearer KZmYsVRbiqJSyL9mcTwWvgGdXEcv_GDMg18qmZep_1HAmlkzzXdNctyWwh_aFdt_qOAM8RSpRZls_LytXaMqo9EBojJkPakAO4jq1r2EkeAN1_yFDORS8K60b9uWYHYx'
        //     }
        // };

        // axios(config)
        // .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

    });
}