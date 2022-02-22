const express = require('express')
const user = require('./models/user')
const mqtt = require('mqtt')
const mosca = require('mosca')

const settings = {
    port:3000
}
const server = new mosca.Server(settings); //ouve a porta setada

const app = express()

app.use(express)



const client  = mqtt.connect('mqtt://localhost:1883');



client.on('connect', function () {
    console.log("Server is Running")
    client.subscribe('chat')
})

    client.on('close', () => {
        console.log('Chat Server closed');
    });

    // setInterval(function() {
    //     client.publish('X_Y_topic', 'Hello mqtt');
    //     console.log('Message Sent');
    //     context = message.toString();
    //     console.log(context)
    // }, 5000);


class Chat{
        
}


module.exports = Chat;

const option = prompt('Digite a opção')


//sugestao : - criar Id pra conversas.
//           - adicionar os id dos usuarios na conversa
// ---------------------------------------
// idConversa | id user 
   

if (option == 1){

}