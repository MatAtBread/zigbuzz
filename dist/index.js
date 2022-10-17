"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
//import type { Controller as ControllerType } from 'zigbee2mqtt/lib/controller';
const z2m = require('zigbee2mqtt');
//import { connect } from 'mqtt';
function assertAs(o) { }
const aedes = require('aedes')();
const server = require('aedes-server-factory').createServer(aedes);
const port = 1883;
server.listen(port, function () {
    console.log('MQTT server started and listening on port ', port);
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
    await z2m.start(true);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFnQjtBQUNoQixpRkFBaUY7QUFDakYsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRW5DLGlDQUFpQztBQUVqQyxTQUFTLFFBQVEsQ0FBSSxDQUFJLElBQW9CLENBQUM7QUFFOUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDakMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5FLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLFFBQVEsRUFBRSxDQUFDO0FBQ2IsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLFVBQVUsUUFBUTtJQUNyQjs7Ozs7Ozs7TUFRRTtJQUNGLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDIn0=