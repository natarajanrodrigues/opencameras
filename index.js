require('dotenv').config({path: __dirname + '/.env'})

const express = require('express');
const app = express();

const { proxy, scriptUrl } = require('rtsp-relay')(app);

const user = process.env['CAM_USER']
const password = process.env['CAM_PASSORD']
const address1 = process.env['RTSP_ADDRESS1']
const address2 = process.env['RTSP_ADDRESS2']

const rtsp1 = `rtsp://${user}:${password}@${address1}`
const rtsp2 = `rtsp://${user}:${password}@${address2}`

const handler = proxy({
  url: rtsp1,
  // url: `rtsp://admin:activa031299@192.168.68.103:554/cam/realmonitor?channel=1&subtype=0`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});

const handler2 = proxy({
  url: rtsp2,
  // url: `rtsp://admin:activa031299@192.168.68.103:554/cam/realmonitor?channel=2&subtype=0`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});

// the endpoint our RTSP uses
app.ws('/api/stream1', handler);
app.ws('/api/stream2', handler2);



// this is an example html page to view the stream
app.get('/', (req, res) =>
  res.send(`
  <div>
    <canvas id='canvas1' style="max-height: 49vh; width: 100%; max-width: 87.11vh"></canvas>
    <canvas id='canvas2' style="max-height: 49vh; width: 100%; max-width: 87.11vh"></canvas>
  </div>

  <script src='${scriptUrl}'></script>
  <script>
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream1',
      canvas: document.getElementById('canvas1')
    });
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream2',
      canvas: document.getElementById('canvas2')
    });
  </script>
`),
);

app.listen(2000);
