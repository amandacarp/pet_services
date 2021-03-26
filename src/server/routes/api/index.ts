import * as express from 'express';
import usersRouter from './users';
import eventsRouter from './events';
import commentsRouter from './comments';
import servicesRouter from './services';
import petsRouter from './pets';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/comments', commentsRouter);
router.use('/services', servicesRouter);
router.use('/pets', petsRouter);

export default router;