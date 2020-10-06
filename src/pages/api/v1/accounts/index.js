import { openDatabase } from '../../utils/openDatabase';
import { authentication } from '../../middlewares';

const getAccountsApi = async (req, res, session) => {
    if (req.method === 'GET') {
        if (session.role == 'admin' || session.role == 'manager') {
            try {
                const database = await openDatabase();
                const Accounts = await database.all('select id, username, role, name from Accounts');

                res.status(200).send(Accounts);
            } catch (error) {
                res.status(500).send({ message: error.message });
            }
        } else {
            res.status(403).send({ message: 'No Permission!' });
        }
    } else {
        res.status(400).end();
    }
};
export default authentication(getAccountsApi);
