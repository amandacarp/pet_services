import * as express from 'express';
import {sendConfirm} from '../../utils/contact';

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const emailInfo = req.body //store req.body in variable
        const result = await sendConfirm('carpentieri.a@gmail.com', emailInfo.email, 'New Appointment Scheduled!', 'Somebody scheduled a new pet services appointment! Click  ___ to view!'); //get result from mailgun server
        //@ts-ignore
        if (result.id) {
            res.json(result);
        } else {
            throw Error('Sending email was unsuccessful')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'you have an error', error: error.message }) 
    }
})

export default router;