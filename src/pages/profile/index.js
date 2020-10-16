import { NavBar, PageFrame } from '../../components';

const ProfilePage = ({ username, role, name }) => {
    return (
        <React.Fragment>
            <NavBar role={role} />
            <PageFrame>
                <div className="flex flex-col">
                    <div className="flex flex-row w-64">
                        <p className="w-4/12">ชื่อผู้ใช้</p>
                        <p className="w-8/12">{username}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="w-4/12">สถานะ</p>
                        <p className="w-8/12">{role}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="w-4/12">ชื่อ-นามสกุล</p>
                        <p className="w-8/12">{name}</p>
                    </div>
                </div>
            </PageFrame>
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
        props: { username: session.username, role: session.role, name: session.name },
    };
};
