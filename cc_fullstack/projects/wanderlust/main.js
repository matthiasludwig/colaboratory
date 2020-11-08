// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
// Foursquare
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200409`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      console.log("Foursquare Response: ", venues);
      return venues;
    }
    throw new Error("Foursquare Connection Failure!");
  } catch(error) {
    console.log(error);
  }
}

const getVenueInformation = async (venue) => {
  const urlToFetch = `${venueUrl}${venue.id}?client_id=${clientId}&client_secret=${clientSecret}&v=20200409`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.response;
    }
    throw new Error("Failure getting venue information!");
  } catch(error) {
    console.log(error);
  }
};

// OpenWeather
const getForecast = async () => {
  const location = $input.val();
  const urlToFetch = `${weatherUrl}?q=${location}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("OpenWeather Response: ", jsonResponse);
      return jsonResponse;
    }
    throw new Error("Weather Connection Failure!");
  } catch(error) {
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue) => {
    let index = Math.round(Math.random() * venues.length);
    const venue = venues[index];
    venues.splice(index, 1); // Remove the added venue
    // Getting additional venue information
    getVenueInformation(venue).then((venueInformation) => {
      const venueIcon = `${venue.categories[0].icon.prefix}bg_64${venue.categories[0].icon.suffix}`;
      const venuePhoto = `${venueInformation.venue.photos.groups[0].items[0].prefix}200x100${venueInformation.venue.photos.groups[0].items[0].suffix}`
      let venueContent = createVenueHTML(venue.name, venue.location, venueInformation.venue.url, venueIcon, venuePhoto);
      $venue.append(venueContent);
    });
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);  // City Name as a Heading
}

const renderForecast = (day) => {  
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => {renderVenues(venues)});
  getForecast().then(forecast => {renderForecast(forecast)});
  return false;
}

$submit.click(executeSearch)