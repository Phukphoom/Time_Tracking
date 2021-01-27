import { openDatabase } from '../../../utils/openDatabase';
import { authentication } from '../../../middlewares';

const getAccountApi = async (req ,res ,session) => {
    if (req.method === 'GET') {
        if (session.role == 'admin' || session.role == 'manager') {
            const query = req.query

            try {
                const database = await openDatabase();
                const Accounts = await database.all(`select username, role, name from Accounts where id='${query.id}'`);
                
                if(Accounts.length != 0){
                    res.status(200).send(Accounts[0]);
                }
                else{
                    res.status(403).send({ message: 'Not Found' });
                }
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
export default authentication(getAccountApi);
