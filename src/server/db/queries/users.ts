import {Query} from '../';
import {User, MySQLResponse} from '../../../common/types';

const one = (userid: User['id']) => Query<User[]>('SELECT * FROM Users WHERE id = ?', [userid])
const insert = (newUser: User) => Query<MySQLResponse>('INSERT INTO Users SET ?', [newUser])
const find = (column: string, value: string | number) => Query<User[]>('SELECT * FROM Users WHERE ?? = ?', [column, value])

export default {
    one,
    insert,
    find
}