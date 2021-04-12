import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';
import { Pet } from '../../../common/types';
import upload from '../../middlewares/upload-middleware';

const router = express.Router();

router.get('/:id?', async (req, res) => {
    const id: Pet['id'] = Number(req.params.id);
    try {
        const result = id ? await db.Pets.one(id) : await db.Pets.all();
        res.json(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage)
    }
});

router.post('/', passport.authenticate('jwt'), upload.single('pet_photo'), async (req: any, res) => {
    const pet_name = req.body.pet_name
    const pet_age = req.body.pet_age
    const pet_breed = req.body.pet_breed
    const pet_photo = req.file.location
    const userid = req.user.userid
    try {
        const result = await db.Pets.insert(userid, pet_name, pet_age, pet_breed, pet_photo)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
});

router.put('/:id', passport.authenticate('jwt'), upload.single('pet_photo'), async (req: any, res) => {
    const pet_name = req.body.pet_name
    const pet_age = req.body.pet_age
    const pet_breed = req.body.pet_breed
    const pet_photo = req.file.location
    const userid = req.user.userid
    const id = Number(req.params.id)
    try {
        const result = await db.Pets.update(pet_name, pet_age, pet_breed, pet_photo, id, userid)
        console.log(`Pet ${id} edited`)
        res.json(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage)
    }
});

router.delete('/:id', passport.authenticate('jwt'), async (req: any, res) => {
    const id = Number(req.params.id)
    const userid = req.user.userid
    try {
        await db.Events.destroy(id, userid)
        .then(() => {db.Pets.destroy(id, userid)})
        res.status(200).send(`Pet ${id} deleted`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
});

export default router;