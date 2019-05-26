cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-app-preferences.apppreferences",
    "file": "plugins/cordova-plugin-app-preferences/www/apppreferences.js",
    "pluginId": "cordova-plugin-app-preferences",
    "clobbers": [
      "plugins.appPreferences"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-app-preferences": "0.99.3",
  "cordova-plugin-whitelist": "1.3.4-dev",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-support-google-services": "1.1.0",
  "phonegap-plugin-multidex": "1.0.0",
  "phonegap-plugin-push": "2.2.3"
};
// BOTTOM OF METADATA
});