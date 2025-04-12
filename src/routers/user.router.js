import {Router} from 'express';
import { generateUser } from '../utils.js';
import { UserModel } from '../models/userModel.js';



const router = Router();

//50 usuarios mockeados sin guardar en la base de datos
//se generan con la libreria faker
router.get('/mockingusers', (req, res) => {

    const {amount = 50} = req.query;

    const users = []
    for(let i=0; i<amount; i++){
        users.push(generateUser())
    }
    res.send({mensaje: `Se genero ${amount} usuarios`, payload: users})
})
;

//inserta los usuarios generados en la base de datos
router.post('/generateData', async (req, res) => {
    try{
        const {users = 0 } = req.body;
        const userToInsert = [];
        for(let i=0; i<users; i++){
            userToInsert.push(generateUser())
        }

        const insertedUsers = await UserModel.insertMany(userToInsert);

        res.send({mensaje: `Se generaron ${insertedUsers.length} usuarios`, payload: insertedUsers});
    } catch(err){
        console.log(err);
        res.status(500).send({mensaje: 'Error al generar los usuarios'})
    }
}
);






export default router;
