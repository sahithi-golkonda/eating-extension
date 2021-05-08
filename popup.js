
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
        
        var requestOptions = {
            method: 'GET',
            headers: {"Authorization": "Bearer KZmYsVRbiqJSyL9mcTwWvgGdXEcv_GDMg18qmZep_1HAmlkzzXdNctyWwh_aFdt_qOAM8RSpRZls_LytXaMqo9EBojJkPakAO4jq1r2EkeAN1_yFDORS8K60b9uWYHYx"},
            redirect: 'follow'
        };

        let proxy = "https://limitless-retreat-60020.herokuapp.com/";
        let url = "https://api.yelp.com/v3/businesses/search?open_now=True&location="

        let jsonData = await fetch(proxy + url + "Austin", requestOptions);
        let data = await jsonData.json();
        let restaurant = await data["businesses"][1]["name"];

        window.alert(restaurant);

    });
}