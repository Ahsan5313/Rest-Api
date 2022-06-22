const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{

    res.send(`
         <h1>Hello World</h1>
         <h2>How are you?</h2>
         <h3>This is a programmer</h3>
         <h4>This is a developer</h4>
    `)
});

app.get('/post', (req, res) =>{

    res.send('<h1>Hello this is post page here</h1>')
});

app.get('/product', (req, res) =>{

    res.send('<h1>Here there are huge amount product available here</h1>')
})

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`)
});
