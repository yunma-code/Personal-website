const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());    
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
  
