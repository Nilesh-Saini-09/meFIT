const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();
const Port = process.env.PORT || 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/workout', (req, res) => {
    res.render('workout');
})

app.get('/:id', (req, res) => {
    
    try {
        const {id} = req.params;
        res.render('workout', {id});
    } catch(error) {
        res.send('Error');
        console.log(error);
    } 

})

app.listen(Port, () => console.log('Warm Up Begins'));