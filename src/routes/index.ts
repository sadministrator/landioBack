import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola world.').status(200);
});

export default router;