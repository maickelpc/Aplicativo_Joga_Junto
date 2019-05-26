cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-app-preferences/www/apppreferences.js",
        "id": "cordova-plugin-app-preferences.apppreferences",
        "pluginId": "cordova-plugin-app-preferences",
        "clobbers": [
            "plugins.appPreferences"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-preferences/src/browser/platform.js",
        "id": "cordova-plugin-app-preferences.platform",
        "pluginId": "cordova-plugin-app-preferences",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-app-preferences": "0.99.3"
}
// BOTTOM OF METADATA
});