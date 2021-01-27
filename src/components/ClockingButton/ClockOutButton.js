const ClockOutButton = ({ userId, disabled }) => {
    const onClick = async (event) => {
        event.preventDefault();

        console.log(`${userId} : ClockOut -> ${new Date().getTime()}`);
    };
    return (
        <button
            className={`flex justify-center items-center text-2xl text-white w-64 h-32 rounded-md bg-red-500 ${
                !disabled ? 'hover:bg-red-600 active:bg-red-700 focus:outline-none' : 'cursor-not-allowed opacity-25'
            }`}
            disabled={disabled}
            onClick={onClick}
        >
            ออกงาน
        </button>
    );
};
export default ClockOutButton;
