import { hash } from 'bcrypt';

import { openDatabase } from '../../utils/openDatabase';
import { hashSalt } from '../../utils/config';
import { authentication } from '../../middlewares';

const changePasswordApi = async (req, res, session) => {
    if (req.method === 'PUT') {
        if (session.role == 'admin' || session.role == 'manager') {
            const data = req.body;
            const hashedPassword = await hash(data.password, hashSalt);

            try {
                const database = await openDatabase();
                const updatedAccount = await database.all(`select role from Accounts where id='${data.id}'`);
                const updatedRole = updatedAccount[0].role;
                const updaterRole = session.role;

                const levelRole = { admin: 3, manager: 2, employee: 1 };
                const canUpdate = levelRole[updaterRole] > levelRole[updatedRole];
                if (canUpdate) {
                    await database.all(
                        `update Accounts set password='${hashedPassword}' where id='${data.id}'`
                    );
                    res.status(200).end();
                } else {
                    res.status(403).send({ message: 'No Permission!' });
                }
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
export default authentication(changePasswordApi);