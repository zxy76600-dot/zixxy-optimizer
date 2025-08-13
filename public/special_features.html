const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const os = require('os');
const osUtils = require('os-utils');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Multiuser storage (simple in-memory for now)
let users = [
    { id: 'zixxy', pass: '1', permissions: { root: true, nonroot: true, special: true, esports: true } },
    // Add more users here if needed
];

// Login API
app.post('/login', (req, res) => {
    const { id, pass } = req.body;
    const user = users.find(u => u.id === id && u.pass === pass);
    if (user) {
        res.json({ success: true, permissions: user.permissions });
    } else {
        res.json({ success: false });
    }
});

// Device info API
app.get('/device-info', (req, res) => {
    res.json({
        platform: os.platform(),
        arch: os.arch(),
        cpuCores: os.cpus().length,
        totalMem: os.totalmem(),
        freeMem: os.freemem(),
        uptime: os.uptime()
    });
});

// Optimization routes (placeholders for ADB/root logic)
app.post('/optimize', (req, res) => {
    const { type } = req.body;
    console.log(`Running optimization: ${type}`);
    // Here, you'd run ADB or root commands based on the "type"
    res.json({ success: true, message: `${type} optimization complete` });
});

// Socket.io for real-time FPS/Temp updates
io.on('connection', (socket) => {
    console.log('Client connected');

    const sendStats = () => {
        osUtils.cpuUsage((cpuPercent) => {
            socket.emit('stats', {
                cpu: (cpuPercent * 100).toFixed(2),
                mem: ((1 - osUtils.freememPercentage()) * 100).toFixed(2),
                fps: Math.floor(Math.random() * (60 - 45) + 45), // Simulated
                temp: Math.floor(Math.random() * (45 - 30) + 30) // Simulated
            });
        });
    };

    const interval = setInterval(sendStats, 2000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        clearInterval(interval);
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
