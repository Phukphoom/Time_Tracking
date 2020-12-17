import { NavBar, PageFrame } from '../components';

const HomePage = ({ role }) => {
    return (
        <React.Fragment>
            <NavBar role={role} />
            <PageFrame>Home Page</PageFrame>
        </React.Fragment>
    );
};
export default HomePage;

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
        props: { role: session.role },
    };
};