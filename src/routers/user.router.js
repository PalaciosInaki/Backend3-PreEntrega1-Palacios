import {Router} from 'express';
import { generateUser } from '../utils.js';

const router = Router();

router.get('/mock', (req, res) => {

    const {amount = 1000} = req.query;

    const users = []
    for(let i=0; i<amount; i++){
        users.push(generateUser())
    }
    res.send({mensaje: `Se genero ${amount} usuarios`, payload: users})
})
;




export default router;
