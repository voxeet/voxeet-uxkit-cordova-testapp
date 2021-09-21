# Dolby.io Communications APIs Cordova plugin TestApp app

_WIP this is scheduled to be implemented by the 15th of March 2021_

This is the test app from the Cordova plugin. This apps provides all the various core feature added inside the [cordova-plugin-voxeet](https://www.npmjs.com/package/cordova-plugin-voxeet)

## Installation

```
git clone git@github.com:voxeet/voxeet-uxkit-cordova-testapp.git
cd voxeet-uxkit-cordova-testapp
npm install
```

## Pre-platform configuration

The test app is providing an appId/appSecret by default implementation. Edit the `config.xml` file to add the keys in place of the CHANGEME values
```
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.example.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    ...
    <preference name="VOXEET_CORDOVA_CONSUMER_KEY" value="CHANGEME"/>
    <preference name="VOXEET_CORDOVA_CONSUMER_SECRET" value="CHANGEME"/>
</widget>
```

Update as well the `src/content/Login.tsx` file to put your keys in the initialize method.

## Add the platforms

```
cordova platform add android

# optional, add iOS platform on MacOS environment
cordova platform add ios
```
