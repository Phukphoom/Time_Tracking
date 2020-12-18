import { openDatabase } from '../../utils/openDatabase';
import { authentication } from '../../middlewares';

const updateProfileApi = async (req, res, session) => {
    if (req.method === 'PUT') {
        if (session.role == 'admin' || session.role == 'manager') {
            const data = req.body;

            try {
                const database = await openDatabase();
                const updatedRole = data.role;
                const updaterRole = session.role;

                const levelRole = { admin: 3, manager: 2, employee: 1 };
                const canUpdate = levelRole[updaterRole] > levelRole[updatedRole];
                if (canUpdate) {
                    await database.all(`update Accounts set role='${data.role}',name='${data.name}' where id='${data.id}'`);
                    res.status(200).end();
                } else {
                    res.status(403).send({ message: 'No Permission!' });
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
export default authentication(updateProfileApi);
