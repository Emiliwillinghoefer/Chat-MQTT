const Paho = require("paho-mqtt");
global.WebSocket = require("ws");

var mqttHost = "192.168.9.184";
topic = "testTopic";
client = new Paho.Client(mqttHost, 1883, "clientID_" + parseInt(Math.random() * 100, 10));

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({ onSuccess: onConnect });

//client connected
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe(topic);
  var message = new Paho.Message("Hello");
  message.destinationName = topic;
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:" + message.payloadString);
}

function messageSend(message) {
    
}