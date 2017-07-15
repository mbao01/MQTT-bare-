var mqtt = require('mqtt');
var express = require('express');
var client  = mqtt.connect('ws://localhost:1884');

client.on('connect', function () {
    client.subscribe('beat');
    client.subscribe('Test');
    var data = new Date().getTime();
    client.publish('Test', data.toString());
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    // client.end() /** One Time Connection **/
});

client.on('error', function (error) {
   console.log('ERROR OCCURED: Custom Ayomide', error);
});