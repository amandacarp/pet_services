import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';
import {Event, User} from '../../../common/types';

const router = express.Router();

router.get('/:id?', async (req, res) => {
    const id: Event['id'] = Number(req.params.id);
    try {
        const result = id ? await db.Events.one(id) : await db.Events.all();
        res.json(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage)
    }
});

router.post('/', passport.authenticate('jwt'), async (req: any, res) => {
    const description = req.body.description
    const time = req.body.time
    const start_date = req.body.start_date
    const end_date = req.body.end_date
    const petid = req.body.petid
    const serviceid = req.body.serviceid
    const userid = req.user.userid
    try {
        const result = await db.Events.insert(userid, description, time, start_date, end_date, petid, serviceid)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})
router.put('/:id', passport.authenticate('jwt'), async (req: any, res) => {
    const id: Event['id'] = Number(req.params.id);
    const description: Event['description'] = req.body.description;
    const time: Event['time'] = req.body.time;
    const start_date: Event['start_date'] = req.body.start_date;
    const end_date: Event['end_date'] = req.body.end_date;
    const petid: Event['petid'] = req.body.petid;
    const serviceid = req.body.serviceid;
    const userid: User['id'] = req.user.userid; //provide userid on put and delete req to ensure ONLY user who posted can edit and delete
    try {
        const result = await db.Events.update(description, time, start_date, end_date, petid, serviceid, id, userid)
        console.log(`Event ${id} edited`)
        res.json(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage)
    }
});

router.delete('/:id', passport.authenticate('jwt'), async (req: any, res) => {
    const id = Number(req.params.id)
    const userid = req.user.userid
    try {
        const result = await db.Events.destroy(id, userid)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

export default router;