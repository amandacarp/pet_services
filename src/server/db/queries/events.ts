import { Query } from '../';
import { Event, MySQLResponse, Pet, Services, User } from '../../../common/types';

const all = () => Query<Event[]>('SELECT Events.*, Users.owner_name, Pets.pet_name, Pets.pet_photo, Services.name, COUNT(Comments.id) AS num_of_comments FROM Events JOIN Users ON Users.id = Events.userid LEFT JOIN Pets ON Pets.id = Events.petid LEFT JOIN Comments ON Comments.eventid = Events.id LEFT JOIN Services ON Services.id = Events.serviceid GROUP BY Events.id ORDER BY Events._created DESC');
const one = (id: Event['id']) => Query<Event>('SELECT Events.*, Users.owner_name, Pets.pet_name, Services.name FROM Events JOIN Users ON Users.id = Events.userid LEFT JOIN Pets ON Pets.id = Events.petid LEFT JOIN Services ON Services.id = Events.serviceid WHERE Events.id = ?', [id]);
const insert = (userid: User['id'], title: Event['title'], description: Event['description'], time: Event['time'], start_date: Event['start_date'], end_date: Event['end_date'], petid: Pet['id'], serviceid: Services['id']) => Query<MySQLResponse>('INSERT INTO Events SET userid = ?, title = ?, description = ?, time = ?, start_date = ?, end_date = ?, petid = ?, serviceid = ?', [userid, title, description, time, start_date, end_date, petid, serviceid]);
const update = (title: Event['title'], description: Event['description'], time: Event['time'], start_date: Event['start_date'], end_date: Event['end_date'], petid: Pet['id'], serviceid: Services['id'], id: Event['id'], userid: User['id']) => Query<MySQLResponse>('UPDATE Events SET title = ?, description = ?, time = ?, start_date = ?, end_date = ?, petid = ?, serviceid = ? WHERE id = ? AND userid = ?', [title, description, time, start_date, end_date, petid, serviceid, id, userid]);
const destroy = (id: Event['id'], userid: User['id']) => Query<MySQLResponse>('DELETE FROM Events WHERE id = ? AND userid = ?', [id, userid]);
const find = (column: string, value: string | number) => Query<Event[]>('SELECT Events.*, Pets.pet_name, Services.name FROM Events JOIN Pets ON Pets.id = Events.petid LEFT JOIN Services ON Services.id = Events.serviceid WHERE ?? = ?', [column, value])

export default {
    all,
    one,
    insert,
    update,
    destroy,
    find
}