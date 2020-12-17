import { openDatabase } from '../../utils/openDatabase';
import { authentication } from '../../middlewares';

const updateProfileApi = async (req, res, session) => {
    if (req.method === 'PUT') {
        if (session.role == 'admin' || session.role == 'manager' || req.body.id == session.id) {
            const data = req.body;

            try {
                const database = await openDatabase();
                await database.all(
                    `update Accounts set role='${data.role}',name='${data.name}' where id='${data.id}'`
                );

                res.status(200).end();
            } catch (error) {
                res.status(500).send({ message: error.message });
            }
        }
        else {
            res.status(403).send({ message: 'No Permission!' });
        }
    } else {
        res.status(400).end();
    }
};
export default authentication(updateProfileApi);