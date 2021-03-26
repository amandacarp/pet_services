import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();

router.get('/events/:eventid', async (req, res) => {
    try {
        const eventid = Number(req.params.eventid)
        const comments =  await db.Comments.allforEvent(eventid)
        res.json(comments)
    } catch (error) {
        res.status(500).send(error.sqlMessage)
    }
});

router.post('/', passport.authenticate('jwt'), async (req: any, res) => {
    const newComment = req.body
    try {
        newComment.userid = req.user.userid
        await db.Comments.insert(newComment)
        res.json({message: 'new comment inserted'})
    } catch (error) {
        res.status(500).send(error.sqlMessage)
    }
})

export default router;