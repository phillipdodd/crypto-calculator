const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.get('/startCounter', (req, res) => {
    startCounter();
    res.send('Started Counter!');
});


function startCounter() {
    var counter = 0;
    return setInterval(() => {
        counter += 1;
        console.log(counter);
    }, 1000);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));