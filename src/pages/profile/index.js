import { NavBar, PageFrame, AccountManager } from '../../components';

const ProfilePage = ({ id, role }) => {
    return (
        <React.Fragment>
            <NavBar id={id} role={role} />
            <PageFrame></PageFrame>
        </React.Fragment>
    );
};
export default ProfilePage;

export const getServerSideProps = async ({ req, res }) => {
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

    return {
        props: { id: session.id, role: session.role },
    };
};
