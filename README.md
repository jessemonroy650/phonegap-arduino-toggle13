# phonegap-arduino-toggle13
A simple phonegap app to toggle LED #13 on the Arduino Yun.

This program is both a demo and a tutorial. The phonegap App is available for Android and iOS.

If writing a webpage and adding a bit of Javascript seems easy, then phonegap might be the thing for you.

Recently, phonegap was purchased by Adobe. However, it remains an open source project under the name of Cordova, with Apache being the watchguard.

I assume if you are seeing this, you've played with the Arduino family to a fair extent. If so, then toggling an LED should seem like an old hat trick. I won't cover that here.

## Getting This Working ##
This demo requires the Arduino Yun, a micro-USB cable, and the sketch *Bridge*. 

1. Plug the Arduino Yun into your PC with the micro-USB cable.
2. Start the IDE. Load the *Bridge* sketch. Upload the sketch to the Yun.
3. Make sure your webbrowser, your mobile device and the YUN are all on the same network.
4. Test the *Bridge* sketch with your web browser.
5. Start up PAT (Phonegap-Arduino-Toggle)
6. Enter the IP of your Yun in the Input box
7. Tap the [Toggle] button.

The LED should go *on*, if it was off; and *off* if it was on.

## Partial Line by Line Description ##

From the top of the file, we work our way down.

Require for mobile devices. Essentially it tells the browser you know what your are doing.
``    <meta name="viewport" content="width=device-width">``

A set of predefined [CSS Buttons](http://unicorn-ui.com/buttons/builder/) from Alex Wolfe and Ron Levin
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
