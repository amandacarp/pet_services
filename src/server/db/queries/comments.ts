import { Query } from '../';
import { User, Comments, MySQLResponse } from '../../../common/types';

const allforEvent = (eventid: number) => Query<Comments & User[]>(`
SELECT Comments.*, Users.owner_name FROM
    Comments
        JOIN
    Users on Users.id = Comments.userid
WHERE Comments.eventid = ?
ORDER BY _created ASC`, [eventid]);
const insert = (newComment: any) => Query<MySQLResponse>('INSERT INTO Comments SET ?', newComment);
const destroy = (eventid: number) => Query('DELETE FROM Comments WHERE eventid = ?', [eventid])

export default {
    allforEvent,
    insert,
    destroy
}