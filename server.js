const express = require('express');
const hbs = require('hbs');
const os = require('os');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',
    (req, res) => {
        res.render('home',
            {
                userName: os.userInfo().username,
                currentYear: new Date().getFullYear()
            });
    });

app.get('/about',
    (req, res) => {
        res.render('about');
    });

app.listen(port, () => console.log(`Server is up and running on port ${port}`));

