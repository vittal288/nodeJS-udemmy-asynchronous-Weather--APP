"# nodeJS-udemmy-asynchronous-Weather--APP" 

This is weather app 


Weather APIs
Google Map API to find out lat and lng
Syntax:http://maps.googleapis.com/maps/api/geocode/json?address=YOUR_ADDRSS
http://maps.googleapis.com/maps/api/geocode/json?address=%22Vijayanagar%20Bangalore%22
Weather Forecase Info API from darksky
Syntax: https://api.darksky.net/forecast/[key]/[latitude],[longitude]
https://api.darksky.net/forecast/67e781055fae0abac5216d8d9ca8b413/15.8132997,74.8565613

Reference site 
https://teamtreehouse.com/community/retrieving-weather-data-from-dark-sky-api-instead-of-user-data-from-treehouse


to run app 

1. Navigate to app.js or app-promise.js

Positive scenario 

2. then hit folder_path>node app-promise.js -a "Bangalore"

3. o/p-->Currently Temperature of Bengaluru, Karnataka, India  28.366666666666667 , Feels like 26.988888888888887

Negetive scenario

4. folder_path>node app-promise.js -a "00000000" or folder_path>node app-promise.js -a ""

o/p -->Unable to find the address
