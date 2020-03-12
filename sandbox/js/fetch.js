// where DataCue
// request data 
// if error catch 
// if none put data into variable
let fetchIt = "/sandbox/js/idahoweather.json";
fetchWeatherData(fetchIt);
function fetchWeatherData(fetchIt){
    var pageNav = $('#navigation');

   
    fetch(weatherURL).then(function(response) {
    if(response.ok){
    return response.json();
    }
    throw new ERROR('Network response was not OK.');
    }).then(function(data){
        console.log(data);
        let cityName = data.Preston.properties.relativelocation.properties.city;
     
    .catch(function(error){
    console.log('There was a fetch problem: ', error.message);
    statusContainer.innerHTML = 'Sorry, the data could not be processed.';
    })
}
getWeatherData();