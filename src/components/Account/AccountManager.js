import AccountItem from './AccountItem';

const AccountManager = ({ clientRole, accounts }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row my-8 w-full h-14 text-xl font-bold">
                <button className="flex w-1/12 justify-center m-2 py-1 rounded text-white bg-green-500 hover:bg-green-700 active:bg-green-900 focus:outline-none">
                    เพิ่มบัญชี
                </button>
                <div className="flex w-11/12 justify-end m-2 py-1 px-4 rounded bg-gray-300 text-black">จำนวนทั้งหมด {accounts.length} บัญชี</div>
            </div>
            <AccountItem isTitle id="ID" name="ชื่อ - นามสกุล" role="สถานะ" username="ชื่อผู้ใช้" />
            {accounts.map((account, key) => {
                return (
                    <AccountItem
                        key={key}
                        clientRole={clientRole}
                        id={account.id}
                        name={account.name}
                        role={account.role}
                        username={account.username}
                    />
                );
            })}
        </div>
    );
};
export default AccountManager;
