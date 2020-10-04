import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = ({ role }) => {
    const router = useRouter();

    const logoutHandler = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/v1/logout', {
            method: 'POST',
        });

        if (response.redirected) {
            router.replace(response.url);
        }
    };

    const isManager = role == 'manager';
    return (
        <div className=" fixed top-0 flex flex-cols justify-between items-center w-full h-20 px-32 bg-black">
            {isManager && (
                <div className="flex flex-cols justify-center items-center">
                    <Link href="/">
                        <a className="font-bold bg-white px-6 py-2 rounded hover:bg-gray-500 active:bg-gray-600">หน้าหลัก</a>
                    </Link>
                    <Link href="/dashboard">
                        <a className="font-bold bg-white ml-4 px-6 py-2 rounded hover:bg-gray-500 active:bg-gray-600">Dashboard</a>
                    </Link>
                    <Link href="/manage">
                        <a className="font-bold bg-white ml-4 px-6 py-2 rounded hover:bg-gray-500 active:bg-gray-600">บัญชีพนักงาน</a>
                    </Link>
                </div>
            )}
            <button
                className="font-bold bg-red-600 text-white ml-auto px-10 py-4 rounded hover:bg-red-500 active:bg-red-700 focus:outline-none"
                onClick={logoutHandler}
            >
                ออกจากระบบ
            </button>
        </div>
    );
};
export default NavBar;
