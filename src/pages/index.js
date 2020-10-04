import { NavBar } from '../components';

const HomePage = ({ username, role, name }) => {
    return (
        <React.Fragment>
            <NavBar role={role} />
            <div className="flex flex-col w-full h-screen items-center justify-center font-bold text-2xl">
                <div>
                    <p>Username : {username}</p>
                    <p>Role : {role}</p>
                    <p>Name : {name}</p>
                </div>
            </div>
        </React.Fragment>
    );
};
export default HomePage;

export const getServerSideProps = async ({ req, res }) => {
    const response = await fetch('http://localhost:3000/api/v1/getSession', {
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
        props: { username: session.username, role: session.role, name: session.name },
    };
};
