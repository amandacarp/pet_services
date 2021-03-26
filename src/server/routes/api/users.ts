import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db'

const router = Router()
//creating a profile page for specific users (authors) by grabbing their db credentials and all events they've created
router.get('/profile', passport.authenticate('jwt'), async (req: any, res) => { //callback function to db that runs after router finds '/profile'
    try {
        const userid = req.user.userid
        const [profile] = await db.Users.one(userid); 
        const events = await db.Events.find('Events.userid', userid)
        const pets = await db.Pets.find('userid', userid)
        delete profile.password;
        res.json({profile, events, pets}) //converts json to js and displays
    } catch (error) {
        res.status(500).send(error.sqlMessage)
    }
})

export default router;