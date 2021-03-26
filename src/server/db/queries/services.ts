import { Query } from '../';
import {Services} from '../../../common/types';

const all = () => Query<Services[]>('SELECT * FROM Services');
const one = (id: Services['id']) => Query<Services>('SELECT * FROM Services WHERE id = ?', [id]);



export default {
    all,
    one
}