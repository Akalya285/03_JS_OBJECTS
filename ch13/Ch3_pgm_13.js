// Location for a weather app

var geolocation = {
  "city"      : "San Francisco",
  "state"     : "CA",
  "country"   : "US",
  "zip"       : "94101",
  "latitude"  : 37.775,
  "longitude" : -122.418,
  "elevation" : 47.000
};

/* Further Adventures
*
* 1) Run the program
*
* 2) In the console tab, click after the blue arrow.
*    Type geolocation.city followed by Enter
*    to show the city property.
*
* Hmmmm, something's not right!
*
* 3) Type geolocation and press Enter
*    to display the whole geolocation object.
*
* Okay, that's definitely our geolocation object now.
*
* This is an example of preventing variable collision.
* Browsers (and jsBin) are programs themselves and
* create their own variables.
* Other code, not ours, has declared its own
* location variable, but ours remains intact as geolocation.
*
* 4) Explore other properties of geolocation.
*
*/
