import { NavBar, PageFrame } from '../../components';

const ProfilePage = ({ username, role, name }) => {
    return (
        <React.Fragment>
            <NavBar role={role} />
            <PageFrame>
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col w-5/12">
                        <div className='mt-4'>
                            <p className="flex text-4xl font-bold">ข้อมูลพนักงาน</p>
                            <div className="flex flex-col">
                                <p className="text-lg">ชื่อ-นามสกุล</p>
                                <p className="text-gray-600 mt-4 ml-8">{name}</p>
                            </div>
                            <div className="flex flex-col pt-4">
                                <p className="text-lg">สถานะ</p>
                                <p className="text-gray-600 mt-4 ml-8">{role}</p>
                            </div>
                        </div>

                        <div className='mt-12'>
                            <p className="flex text-4xl font-bold">ข้อมูลบัญชี</p>
                            <div className="flex flex-col">
                                <p className="text-lg">ชื่อผู้ใช้</p>
                                <p className="text-gray-600 mt-4 ml-8">{username}</p>
                            </div>
                        </div>
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
