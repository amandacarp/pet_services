import * as mysql from 'mysql';
import config from '../config';
import Users from './queries/users';
import Pets from './queries/pets';
import Events from './queries/events';
import Services from './queries/services';
import Comments from './queries/comments';

export const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => { 
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values); 
        console.log('Query Running:')
        console.log(sql);
        console.log('');
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}

export default {
    Users,
    Pets,
    Events,
    Services,
    Comments
}