import { NavBar, PageFrame, AccountManager } from '../../../components';

const EditProfilePage = ({ username, role, name }) => {
    return (
        <React.Fragment>
            <NavBar role={role} />
            <PageFrame>Edit Profile Page</PageFrame>
        </React.Fragment>
    );
};
export default EditProfilePage;

export const getServerSideProps = async ({ req, res, query }) => {
    let response;

    response = await fetch('http://localhost:3000/api/v1/getSession', {
        method: 'POST',
        headers: req.headers,
    });
    if (response.redirected) {
        res.writeHead(302, { Location: response.url });
        res.end();
        return {
            props: {},
        };
    }
    const session = await response.json();
    if (session.id != query.id && session.role != 'admin' && session.role != 'manager') {
        res.writeHead(302, { Location: '/' });
        res.end();
        return {
            props: {},
        };
    }

    return {
        props: { username: session.username, role: session.role, name: session.name },
    };
};
