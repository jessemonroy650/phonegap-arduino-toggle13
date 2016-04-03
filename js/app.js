// Global Variables
var defaultHostIP = "192.168.240.1";
var hostIP        = "";
var targetURL     = "";
var ledState      = 0;
var ledIntermediateState = "";
//
function onDeviceReady() {
    // update the input field with a placeholder
    $("#targetIP").attr("placeholder", defaultHostIP);
    if (device.platform === "iOS") {
        // hide Exit button. They don't have one on iOS devices.
        $("#exitApp").addClass("hidden");
        // deals with post-iOS-7 change that covers the status bar
        document.body.style.marginTop = "20px";
    } else if (device.platform == 'Android') {
        // Get rid of 300ms delay 
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body); 
        },false);
        // Exit App
        document.getElementById('exitApp').addEventListener('click', function() {
            navigator.app.exitApp();
        });
    } else if (device.platform == 'browser') {
        // hide Exit button. Browser does not exit.
        document.getElementById('exitApp').classList.add("hidden");
    }
    //
    // This fires only when the button is pressed.
    $("#toggle13").click(function() {
        //alert("toggle LED #13");
        // extract the IP the user gives us.
        hostIP = $("#targetIP").val();
        // if they did not give us one, use 'defaultHostIP'.
        if (! hostIP) {
            hostIP = defaultHostIP;
            // Insert the IP we will use in to the form
            $("#targetIP").val(hostIP);
        }
        // create our partial URL with REST API
        targetURL = "http://" + hostIP + "/arduino/digital/13/"
        ledIntermediateState = "error"; // if we ever see this, we have problems.
        // toggle the state based on our last state.
        if (ledState === 0) {
            ledState = 1;
            myurl = encodeURI(targetURL + "0");
            ledIntermediateState = "IOT set to OFF";
        } else {
            ledState = 0;
            myurl = encodeURI(targetURL + "1");
            ledIntermediateState = "IOT set to ON";
        }
        $("#led13").html(ledIntermediateState);
        // Actually make the call to the webserver.
        $.get(myurl, function (data) {
            //console.log(data);
            $("#led13").html(data);
        });
    });
}
//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', function() {
    // Detect if we are using Cordova/Phonegap or a browser.
    // https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
    var isCordovaApp = (typeof window.cordova !== "undefined");

    // Is it a device we know?
    if ( isCordovaApp === true ) {
        // Wait for PhoneGap to load
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        // This needs to be global so other modules can see it.
        device = {platform:'browser'};
        // Force the function.
        onDeviceReady();
    }
});
