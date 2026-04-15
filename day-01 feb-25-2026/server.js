const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World");
        res.end();
    } else if (req.url === '/create-file') {
        const dirPath = path.join(__dirname, 'files');
        const filePath = path.join(dirPath, 'test.txt');

        fs.mkdir(dirPath, { recursive: true }, (mkdirErr) => {
            if (mkdirErr) {
                res.statusCode = 500;
                res.write("Error creating directory");
                res.end();
                return;
            }

            fs.writeFile(filePath, 'Hello World', (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.write("Error creating file");
                } else {
                    res.write("File created successfully");
                }
                res.end();
            });
        });
    } else if (req.url === '/read-file') {
        const filePath = path.join(__dirname, 'files', 'test.txt');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.write("Error reading file");
            } else {
                res.write(data);
            }
            res.end();
        });
    }
});



server.listen(4000, () => {
    console.log("Server is running on port 4000");
});