const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');


const contactApi = require('./api/router/contact');
const app = express();
app.use(morgan('dev'));
app.use(bodyParse.urlencoded({extended : true}));
app.use(bodyParse.json());

const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {

//     console.log('I am a middleware function');
//     next();
// });

app.use('api/contacts', contactApi)


app.get('/', (req, res) =>{

    res.send(`
         <h1>Hello World</h1>
         <h2>How are you?</h2>
         <h3>This is a programmer</h3>
         <h4>This is a developer</h4>
    `)
});

// app.get('/post', (req, res) =>{

//     res.send('<h1>Hello this is post page here</h1>')
// });

// app.get('/product', (req, res) =>{

//     res.send('<h1>Here there are huge amount product available here</h1>')
// });

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`)
});
