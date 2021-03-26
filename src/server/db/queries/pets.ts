import { Query } from '../';
import { MySQLResponse, Pet, User } from '../../../common/types';

const all = () => Query<Pet[]>('SELECT Pets.*, Users.owner_name FROM Pets JOIN Users ON Users.id = Pets.userid');
const one = (id: Pet['id']) => Query<Pet>('SELECT Pets.*, Users.owner_name FROM Pets JOIN Users ON Users.id = Pets.userid WHERE Pets.id = ?', [id]);
const insert = (userid: User['id'], pet_name: Pet['pet_name'], pet_age: Pet['pet_age'], pet_breed: Pet['pet_breed'], pet_photo: Pet['pet_photo']) => Query<MySQLResponse>('INSERT INTO Pets SET userid = ?, pet_name = ?, pet_age = ?, pet_breed = ?, pet_photo = ?', [userid, pet_name, pet_age, pet_breed, pet_photo]);
const update = (pet_name: Pet['pet_name'], pet_age: Pet['pet_age'], pet_breed: Pet['pet_breed'], pet_photo: Pet['pet_photo'], id: Pet['id'], userid: User['id']) => Query<MySQLResponse>('UPDATE Pets SET pet_name = ?, pet_age = ?, pet_breed = ?, pet_photo = ? WHERE id = ? AND userid = ?', [pet_name, pet_age, pet_breed, pet_photo, id, userid]);
const destroy = (id: Pet['id'], userid: User['id']) => Query<MySQLResponse>('DELETE FROM Pets WHERE id = ? AND userid = ?', [id, userid]);
const find = (column: string, value: string | number) => Query<Pet[]>('SELECT * FROM Pets WHERE ?? = ?', [column, value])

export default {
    all,
    one,
    insert,
    update,
    destroy,
    find
}