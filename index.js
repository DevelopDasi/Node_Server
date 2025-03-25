// import express from 'express';
// import axios from 'axios';

// const app = express();
// const PORT = process.env.PORT || 5005;

// const options = {
//     method: 'GET',
//     url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
//     headers: {
//         accept: 'application/json',
//         authorization: 'Bearer rnd_B4KocObQE89PZY8boyxekkLjyYtL'
//     }
// };

// axios
//     .request(options)
//     .then(res => console.log(res.data))
//     .catch(err => console.error(err));
// // הקשבה לפורט
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server is running on port ${PORT}`);
// });
import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5005;

const options = {
    method: 'GET',
    url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
    headers: {
        accept: 'application/json',
        authorization: 'Bearer rnd_B4KocObQE89PZY8boyxekkLjyYtL'
    }
};

// Endpoint שמחזיר את רשימת האפליקציות המותקנות
app.get(('', (req, res) => { res.send('Hello World'); })
);
app.get('/api/render-services', (req, res) => {
    axios
        .request(options)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).json({ error: error.message }));
});

// הקשבה לפורט
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
