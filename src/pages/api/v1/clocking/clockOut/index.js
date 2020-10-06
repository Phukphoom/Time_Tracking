import { openDatabase } from '../../../utils/openDatabase';
import { authentication } from '../../../middlewares';

const clockOutApi = async (req, res, session) => {
    if (req.method === 'POST') {
        const data = req.body;

        try {
            const database = await openDatabase();
            await database.all(
                `insert into Clocking('accountId', 'clockingType',clockingTime) values('${session.id}', 'clock-out','${data.clockingTime}')`
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
