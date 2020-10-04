import { openDatabase } from '../../../utils/openDatabase';
import { authentication } from '../../../middlewares';

const clockOutApi = async (req, res, session) => {
    if (req.method === 'POST') {
        const data = req.body;

        try {
            const database = await openDatabase();
            const Accounts = await database.all(`select id from Accounts where username='${session.username}'`);
            await database.all(
                `insert into Clocking('accountId', 'clockingType',clockingTime) values('${Accounts[0].id}', 'clock-out','${data.clockingTime}')`
            );

            res.status(200).end();
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    } else {
        res.status(400).end();
    }
};
export default authentication(clockOutApi);