import { authentication } from '../middlewares';

const getSessionApi = async (req, res, session) => {
    if (req.method === 'POST') {
        res.status(200).send(session);
    } else {
        res.status(400).end();
    }
};
export default authentication(getSessionApi);
