import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Connection alive.').status(200);
});

export default router;