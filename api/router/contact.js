const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({

        message : 'Hello, i am get.This is jason message from router dot contact info'
    });
});

router.post('/', (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;

    res.status(200).json({

        message : 'Hello, i am get.This is jason message from router dot contact info',
        name,
        email

    });
});


router.get('/:id', (req, res, next) => {

    res.json({

        message : 'I am single route'
    });
});

router.post('/:id', (req, res, next) => {

    res.json({

        message : 'I am post route'
    });
});

router.put('/:id', (req, res, next) => {

    res.json({


        message: 'I am put route'
    });
});

router.delete('/:id', (req, res, next) => {

    res.json({

        message: 'I am delete route'
    });
});

module.exports = router;