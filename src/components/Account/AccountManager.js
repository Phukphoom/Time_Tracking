import AccountItem from './AccountItem';

const AccountManager = ({ accounts }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <AccountItem isTitle id="ID" name="ชื่อ - นามสกุล" role="สถานะ" username="ชื่อผู้ใช้" />
            {accounts.map((account) => {
                return <AccountItem id={account.id} name={account.name} role={account.role} username={account.username} />;
            })}
            <div className="flex justify-end mt-8 w-full text-lg font-bold ">จำนวนทั้งหมด {accounts.length} บัญชี</div>
        </div>
    );
};
export default AccountManager;
