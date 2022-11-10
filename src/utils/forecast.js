const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=86c4b243e6c2c3d041549e55a9ee7fd4&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location!");
    } else {
      const data = body.current;
      const temp = data.temperature;
      const fTemp = data.feelslike;
      const description = data.weather_descriptions[0];
      callback(
        undefined,
        `${description}. It is currently ${temp} degrees out. It feels like ${fTemp} degrees out.`
      );
    }
  });
};
module.exports = forecast;
