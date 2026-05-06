# Mobile Automation Framework

## Overview

This project contains a simple mobile test automation framework created with:

* Appium
* WebdriverIO (WDIO)
* JavaScript
* Android Emulator

The system under test is the built-in Android Clock application.

The framework was executed on an Android emulator using Appium Inspector for element inspection and locator identification.

---

# Technologies Used

* JavaScript
* Node.js
* WebdriverIO
* Appium
* Android Studio
* Android Emulator (Pixel device)
* Appium Inspector

---

# Project Setup Process

## 1. Install Node.js

Node.js was installed in order to use npm packages and run WebdriverIO.

---

## 2. Install Android Studio

Android Studio was installed to:

* Create Android virtual devices
* Use Android SDK
* Run Android emulator

A Pixel emulator was created using Android Virtual Device Manager (AVD).

---

## 3. Install Appium

Appium was installed globally using npm:

```bash
npm install -g appium
```

The UiAutomator2 driver was used for Android automation.

---

## 4. Install WebdriverIO

A WebdriverIO project was initialized and configured for Appium mobile testing.

Main packages used:

```bash
npm install
```

---

## 5. Start Android Emulator

The Android emulator was started from Android Studio.

---

## 6. Start Appium Server

The Appium server was started using:

```bash
appium --address 127.0.0.1 --port 4723
```

---

## 7. Connect Appium Inspector

Appium Inspector was connected to the running Appium server.

The Inspector was used to:

* Inspect mobile elements
* Identify selectors
* Validate locators
* Debug test execution

---

# Test Scenarios

## Scenario 1 – Add Bratislava City

Steps:

1. Open Clock tab
2. Click Add City button
3. Type "Bratislava"
4. Wait for search results
5. Select "Bratislava, Slovakia"
6. Verify city is added

---

## Scenario 2 – Create Alarm

Steps:

1. Open Alarm tab
2. Click Add Alarm button
3. Select 4 o'clock
4. Select 30 minutes
5. Click OK
6. Verify alarm with time 4:30 is created

---

# Locator Strategy

Different locator strategies were used during automation:

* accessibility id
* resource-id
* xpath
* Android UiSelector

Examples:

```js
$('~Add city')
```

```js
$('id=com.google.android.deskclock:id/material_timepicker_ok_button')
```

```js
$('//*[contains(@text,"4:30")]')
```

---

# Running the Tests

## Install dependencies

```bash
npm install
```

## Run Appium Server

```bash
appium --address 127.0.0.1 --port 4723
```

## Start Emulator

Start the Android emulator from Android Studio.

## Execute Tests

```bash
npx wdio run ./wdio.conf.js
```

---

# Framework Features

* Mobile automation using Appium
* Android emulator execution
* WebdriverIO test framework
* Async/Await implementation
* Appium Inspector integration
* Element verification using assertions

---

# Notes

The framework was successfully executed on an Android emulator.

The automation uses waits and element validation to improve stability during execution.

---

# Author

Created as part of the Mobile Automation Technical Task.
