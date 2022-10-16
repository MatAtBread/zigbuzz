import 'colors';
//import type { Controller as ControllerType } from 'zigbee2mqtt/lib/controller';
const z2m = require('zigbee2mqtt');

//import { connect } from 'mqtt';

function assertAs<T>(o: T): asserts o is T { }

const aedes = require('aedes')();
const server = require('aedes-server-factory').createServer(aedes);

const port = 1883;

server.listen(port, function () {
  console.log('server started and listening on port ', port);
  startZ2M();
});

async function startZ2M() {
  /*
  const client = connect('mqtt://localhost:1883', { keepalive: 10 });
  client.subscribe('zigbee2mqtt/#', { rh: 1, qos: 0 }, (err, granted) => {
    console.log('Client subscribed'.cyan, 'zigbee2mqtt/#', { err, granted })
    client.publish('zigbee2mqtt/test', 'Hello mqtt');
  });
  client.on('connect', (packet) => { console.log("Client Connected".grey) });
  client.on('message', (topic, payload, packet) => console.log("Client Received".grey, topic, payload.toString().startsWith("{") ? JSON.parse(payload.toString()) : payload.toString().grey ));
  */
  await z2m.start();
}

