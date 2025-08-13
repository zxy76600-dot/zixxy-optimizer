
// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const WebSocket = require('ws');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// ===== LOGIN ENDPOINT =====
app.post('/login', (req, res) => {
    const { id, password } = req.body;
    if (id === 'zixxy' && password === '1') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// ===== OPTIMIZATION ENDPOINT (TEST MODE) =====
app.post('/optimize', (req, res) => {
    const { type } = req.body;
    console.log(`Optimization request: ${type}`);
    // In real mode, here we would run ADB commands
    res.json({ success: true, message: `Optimization (${type}) completed (test mode)` });
});

// ===== START HTTP SERVER =====
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// ===== WEBSOCKET SERVER FOR LIVE STATS =====
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected to stats feed');

    const sendStats = () => {
        // Simulated realistic stats
        const stats = {
            fps: Math.floor(Math.random() * (61 - 45) + 45), // 45-60
            temp: (Math.random() * (45 - 30) + 30).toFixed(1), // 30.0°C - 45.0°C
            cpu: Math.floor(Math.random() * (90 - 20) + 20),   // 20%-90%
            ram: Math.floor(Math.random() * (90 - 40) + 40)    // 40%-90%
        };
        ws.send(JSON.stringify(stats));
    };

    // Send stats every 2 seconds
    const interval = setInterval(sendStats, 2000);

    ws.on('close', () => {
        console.log('Client disconnected from stats feed');
        clearInterval(interval);
    });
});
