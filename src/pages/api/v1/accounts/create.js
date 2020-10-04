import { hash } from 'bcrypt';

import { openDatabase } from '../../utils/openDatabase';
import { hashSalt } from '../../utils/config';
import { authentication } from '../../middlewares';

const createAccountApi = async (req, res, session) => {
    if (req.method === 'POST') {
        if (session.role == 'manager') {
            const data = req.body;
            const hashedPassword = await hash(data.password, hashSalt);

            try {
                const database = await openDatabase();
                await database.all(
                    `insert into Accounts('username', 'password', 'role', 'name') values('${data.username}','${hashedPassword}','${data.role}','${data.name}')`
                );

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
export default authentication(createAccountApi);
