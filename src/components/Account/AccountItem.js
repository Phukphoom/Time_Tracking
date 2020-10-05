const AccountCard = ({ isTitle, id, name, role, username }) => {
    return (
        <div className="flex flex-row items-center w-full h-10 bg-white">
            {isTitle && (
                <React.Fragment>
                    <div className="flex w-1/12 m-2 py-1 justify-center rounded-md font-bold text-xl">{id}</div>
                    <div className="flex w-3/12 m-2 py-1 justify-center rounded-md font-bold text-xl">{name}</div>
                    <div className="flex w-3/12 m-2 py-1 justify-center rounded-md font-bold text-xl">{role}</div>
                    <div className="flex w-3/12 m-2 py-1 justify-center rounded-md font-bold text-xl">{username}</div>
                    <div className="flex w-1/12 m-2"></div>
                    <div className="flex w-1/12 m-2"></div>
                </React.Fragment>
            )}
            {!isTitle && (
                <React.Fragment>
                    <div className="flex w-1/12 justify-center m-2 py-1 justify-center rounded-md bg-gray-200 ">{id}</div>
                    <div className="flex w-3/12 justify-center m-2 py-1 justify-center rounded-md bg-gray-200 ">{name}</div>
                    <div className="flex w-3/12 justify-center m-2 py-1 justify-center rounded-md bg-gray-200 ">{role}</div>
                    <div className="flex w-3/12 justify-center m-2 py-1 justify-center rounded-md bg-gray-200 ">{username}</div>
                    <button className="flex w-1/12 m-2 py-1 justify-center rounded-md bg-blue-300 hover:bg-blue-500 active:bg-blue-600 focus:outline-none">
                        เเก้ไข
                    </button>
                    <button className="flex w-1/12 m-2 py-1 justify-center rounded-md bg-red-300 hover:bg-red-500 active:bg-red-600 focus:outline-none">
                        ลบ
                    </button>
                </React.Fragment>
            )}
        </div>
    );
};
export default AccountCard;
