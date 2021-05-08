
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

        fetch("https://limitless-retreat-60020.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Austin", requestOptions)
        .then(response => response.json())
        .then(result => window.alert(result["businesses"][1]["name"]))
        .catch(error => window.alert(error));
    });
}