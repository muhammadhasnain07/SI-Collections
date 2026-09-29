const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Find Local Wi-Fi IPv4 address
function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                if (iface.address.startsWith('192.168.') || iface.address.startsWith('10.')) {
                    return iface.address;
                }
            }
        }
    }
    return '192.168.100.57';
}

const localIp = getLocalIpAddress();

const server = http.createServer((req, res) => {
    let cleanUrl = req.url.split('?')[0];
    if (cleanUrl === '/' || cleanUrl === '') {
        cleanUrl = '/index.html';
    }

    const safePath = path.normalize(decodeURIComponent(cleanUrl)).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(__dirname, safePath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h2 style="color:red;font-family:sans-serif;text-align:center;margin-top:50px;">404 - Page Not Found</h2>');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Access-Control-Allow-Origin': '*'
        });

        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('================================================================');
    console.log('👑 SI COLLECTION - LOCAL MOBILE TESTING SERVER RUNNING');
    console.log('Owner: Muhammad Shamoil | WhatsApp: +92 330 8464118');
    console.log('================================================================');
    console.log('');
    console.log(`📱 MOBILE PHONE PAR KHOLEIN:`);
    console.log(`👉 http://${localIp}:${PORT}/`);
    console.log(`👉 http://${localIp}:${PORT}/shop.html`);
    console.log('');
    console.log(`💻 COMPUTER / LAPTOP PAR KHOLEIN:`);
    console.log(`👉 http://localhost:${PORT}/`);
    console.log('');
    console.log('NOTE: Mobile aur Computer dono ka ek hi Wi-Fi par hona zaroori hai.');
    console.log('Server ko band karne k liye Ctrl + C dabayein.');
    console.log('================================================================');
});
