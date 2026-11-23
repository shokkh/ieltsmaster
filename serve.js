'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const host = '127.0.0.1';
const port = Number(process.argv[2]) || 8765;
const root = path.resolve(__dirname);
const mimeTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.mp3': 'audio/mpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
};

function respond(res, status, headers) {
    res.writeHead(status, headers);
    res.end();
}

function sendFile(req, res, filePath, stat) {
    const headers = {
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
    };
    const range = req.headers.range;

    if (range) {
        const match = /^bytes=(\d*)-(\d*)$/.exec(range);
        if (!match || (!match[1] && !match[2])) {
            headers['Content-Range'] = `bytes */${stat.size}`;
            respond(res, 416, headers);
            return;
        }

        const suffixLength = Number(match[2]);
        const start = match[1] ? Number(match[1]) : Math.max(0, stat.size - suffixLength);
        const end = match[2] && match[1] ? Math.min(Number(match[2]), stat.size - 1) : stat.size - 1;
        if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= stat.size) {
            headers['Content-Range'] = `bytes */${stat.size}`;
            respond(res, 416, headers);
            return;
        }

        headers['Content-Length'] = end - start + 1;
        headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
        res.writeHead(206, headers);
        if (req.method === 'HEAD') {
            res.end();
            return;
        }
        fs.createReadStream(filePath, { start, end }).on('error', error => {
            console.error(`Could not read ${filePath}: ${error.message}`);
            res.destroy(error);
        }).pipe(res);
        return;
    }

    headers['Content-Length'] = stat.size;
    res.writeHead(200, headers);
    if (req.method === 'HEAD') {
        res.end();
        return;
    }
    fs.createReadStream(filePath).on('error', error => {
        console.error(`Could not read ${filePath}: ${error.message}`);
        res.destroy(error);
    }).pipe(res);
}

const server = http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        respond(res, 405, { Allow: 'GET, HEAD' });
        return;
    }

    let pathname;
    try {
        pathname = decodeURIComponent(new URL(req.url, `http://${host}`).pathname);
    } catch (error) {
        respond(res, 400);
        return;
    }

    if (pathname === '/') pathname = '/ielts-master.html';
    const filePath = path.resolve(root, `.${pathname}`);
    const relativePath = path.relative(root, filePath);
    if (path.isAbsolute(relativePath) || relativePath === '..' || relativePath.startsWith(`..${path.sep}`)) {
        respond(res, 403);
        return;
    }

    fs.stat(filePath, (error, stat) => {
        if (error) {
            if (error.code === 'ENOENT' || error.code === 'ENOTDIR') {
                respond(res, 404);
                return;
            }
            console.error(`Could not inspect ${filePath}: ${error.message}`);
            respond(res, 500);
            return;
        }
        if (!stat.isFile()) {
            respond(res, 404);
            return;
        }
        sendFile(req, res, filePath, stat);
    });
});

server.on('error', error => {
    console.error(`Local server failed: ${error.message}`);
    process.exitCode = 1;
});

server.listen(port, host, () => {
    console.log(`IELTS Master is running at http://${host}:${port}/ielts-master.html`);
    console.log('Press Ctrl+C to stop the server.');
});
