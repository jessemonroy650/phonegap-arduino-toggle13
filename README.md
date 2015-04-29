# phonegap-arduino-toggle13
A simple phonegap app to toggle LED #13 on the Arduino Yun.

This program is both a demo and a tutorial. The phonegap App is available for Android and iOS.

Writing a webpage for some seems easy. Added a bit of Javascript to it seems just as easy. If this is the case with you, the phonegap might be the thing for you.

Recently, phonegap was bought by Adobe. However, it remains an open source project under the name of Cordova, with Apache being the watchguard.

I assume if you are seeing this, you've played with the Arduino family to a fair extent. If so, then toggling an LED should seem like an old hat trick. I won't cover that here.

## Getting This Working ##
This demo requires the Arduino Yun and the sketch *Bridge*. 

# Plug the Arduino Yun into your PC.
# Start the IDE. Load the *Bridge* sketch. Upload the sketch to the Yun.
# Test the *Bridge* sketch with your web browser.
# Start up the PAT (Phonegap-Arduino-Toggle)
# Enter the IP of your Yun in the Input box
# Tap the [Toggle] button.


## Partial Line by Line Description ##

From the top of the file, we work our way down.

Require for mobile devices. Essentially it tells the browser you know what your are doing.
``    <meta name="viewport" content="width=device-width">``

A set of predefined CSS Buttons from Alex Wolfe and Ron Levin
``    <link rel="stylesheet" href="buttons.css" />``

A CSS style unique to the APP. It could be in a file, but this is more efficient.
``    <style>``
``    ::``
``    </style>``

Javascript required to make Phonegap work. 
``    <script type="text/javascript" charset="utf-8" src="cordova.js"></script>``

Javascript to remove the 300ms delay inherent to Android.
``    <script type="text/javascript" charset="utf-8" src="js/fastclick.js"></script>``

A Jquery alternative, much more compact and less bloated.
``    <script type="text/javascript" charset="utf-8" src="js/zepto-1.1.6.js"></script>``

My javascript global variables.
``	<script type="text/javascript">``
``  ::``
``	</script>``

*onLoad()* a function called once the <body> of the HTML is completely loaded.
``<body onload="onLoad()">``

After the HTML, is the main program section of the App.

Phonegap gaurantees the (mobile) device will be ready after this event.
So in practice we do NOT interact with the (mobile) device until after this event.
``	document.addEventListener("deviceready", onDeviceReady, false);``

This function in practice for this App is to test whatever Javascript we can.
``	function onLoad() {``

This function is called when the (mobile) device is ready.
``	function onDeviceReady() {``

The inners of this function have comments. If you need help understanding it, please ask.





