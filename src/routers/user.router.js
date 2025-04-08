import {Router} from 'express';

const router = Router();

router.get('/mock', (req, res) => {
    res.send({
        message: 'Hello from the mock user route!'
    });
}
);

export default router;
