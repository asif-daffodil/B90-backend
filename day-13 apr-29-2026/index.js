const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', async (req, res) => {
    const { username, password } = await req.body || {};

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    if(username !== 'asif' || password !== '12345678') {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    try {
        const token = await jwt.sign({username, password}, "5bf305e5a6042277", { expiresIn: '1h' });
        res.json({ token });
    }catch (error) {
        res.status(500).json({ error: 'Error generating token' });
    }
});

app.get('/is-authenticated', async (req, res) => {
    const header = await req.headers['authorization'];
    if (!header) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }

    if(!header.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Invalid authorization header format' });
    }

    const token = header.split(' ')[1];

   try {
        const decoded = await jwt.verify(token, "5bf305e5a6042277");
        res.json({ message: 'Authenticated', user: decoded });
    }catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });  
   }

});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})