import { verify } from 'jsonwebtoken';

import { jwtSecret } from '../utils/config';

const authentication = (func) => {
    return async (req, res) => {
        try {
            const session = verify(req.cookies.auth, jwtSecret);
            return await func(req, res, session);
        } catch (error) {
            res.writeHead(302, { Location: '/login' });
            res.end();
        }
    };
};
export default authentication;
