import { openDatabase } from '../../utils/openDatabase';
import { authentication } from '../../middlewares';

const removeAccountApi = async (req, res, session) => {
    if (req.method === 'POST') {
        if (session.role == 'manager') {
            const data = req.body;

            try {
                const database = await openDatabase();
                await database.all(`delete from Accounts where username='${data.username}'`);

                res.status(200).end();
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
export default authentication(removeAccountApi);
