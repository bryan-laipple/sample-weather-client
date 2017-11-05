# Weather Client

This is a sample web application written in React and Redux.  It contains example uses of:
- Async API processing with **[redux-promise](https://github.com/acdlite/redux-promise)**
- Third-party React components (i.e. **[react-sparklines](https://github.com/borisyankov/react-sparklines)**)
- React components built around third-party javascript (i.e. **[Google Maps](https://developers.google.com/maps/documentation/javascript/reference)**)

### Third-party APIs

The following APIs are used to provide the data fetched by the app:
- [OpenWeatherMap](http://openweathermap.org/forecast5)
- [Google Maps](https://developers.google.com/maps/documentation/javascript/reference)

Both third-party APIs require a key to make HTTP requests.  You can register for an APP ID from OpenWeatherMaps.org [here](http://openweathermap.org/forecast5) and learn how to get a Google Maps API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

To configure the application to build, create a JSON file named **`env.json`** in the root directory with the following content and replace the `<placeholders>` with your keys:
```
{
  "OPEN_WX_MAP_APP_ID": "<open weather map app id>",
  "GOOGLE_MAPS_API_KEY": "<google map api key>"
}
```
*NOTE:* An APP ID from OpenWeatherMaps.org is necessary to run locally on the Webpack dev server, but a Google Maps API key is not.  It can be left undefined until building/deploying to a hosted web-server.

### Running locally

Once you have obtained your API KEYs and created the **`env.json`** file you can build and run locally with the following commands:
```
npm install
npm start
```
### S3 Hosting

The **`deploy-to-aws-s3.sh`** script builds the web resources and assets then pushes them to an S3 bucket setup for web hosting.

AWS S3 must be [configured](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html) to host the content before running the deploy script.

### Special Thanks

This sample application was made possible thanks to [Stephen Grider](https://github.com/StephenGrider) and his React and Redux course on [Udemy](https://www.udemy.com/react-redux/).
