const fetch = require("node-fetch");

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data));


  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", "Bearer KZmYsVRbiqJSyL9mcTwWvgGdXEcv_GDMg18qmZep_1HAmlkzzXdNctyWwh_aFdt_qOAM8RSpRZls_LytXaMqo9EBojJkPakAO4jq1r2EkeAN1_yFDORS8K60b9uWYHYx");

  var requestOptions = {
      method: 'GET',
      headers: {"Authorization": "Bearer KZmYsVRbiqJSyL9mcTwWvgGdXEcv_GDMg18qmZep_1HAmlkzzXdNctyWwh_aFdt_qOAM8RSpRZls_LytXaMqo9EBojJkPakAO4jq1r2EkeAN1_yFDORS8K60b9uWYHYx"},
      redirect: 'follow'
  };

  fetch("https://api.yelp.com/v3/businesses/search?location=Austin", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result["businesses"][0]["name"]))
  .catch(error => console.log('error', error));

  