import { openDatabase } from '../../utils/openDatabase';
import { authentication } from '../../middlewares';

const removeAccountApi = async (req, res, session) => {
    if (req.method === 'POST') {
        if (session.role == 'admin' || session.role == 'manager') {
            const data = req.body;

            try {
                const database = await openDatabase();
                const deletedAccount = await database.all(`select role from Accounts where id='${data.id}'`);
                const deletedRole = deletedAccount[0].role;
                const deleterRole = session.role;

                const levelRole = { admin: 3, manager: 2, employee: 1 };
                const canDelete = levelRole[deleterRole] > levelRole[deletedRole];
                if (canDelete) {
                    await database.all(`delete from Accounts where id='${data.id}'`);
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
export default authentication(removeAccountApi);
