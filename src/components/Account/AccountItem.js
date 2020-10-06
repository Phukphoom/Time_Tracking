import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const AccountCard = ({ clientRole, isTitle, id, name, role, username }) => {
    const router = useRouter();

    const modal = Swal.mixin({
        position: 'center',
        allowEnterKey: false,
        focusConfirm: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'ยืนยัน',
        confirmButtonColor: '#48bb78',
        cancelButtonText: 'ยกเลิก',
        cancelButtonColor: '#f56565',
    });

    const editHandler = async (event) => {
        event.preventDefault();

        router.push(`/profile/editProfile/${id}`);
    };

    const deleteHandler = async (event) => {
        event.preventDefault();

        modal
            .fire({
                icon: 'warning',
                title: 'ยืนยันที่จะลบบัญชีนี้',
                text: `ID ${id} : ${name}`,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    const response = await fetch('/api/v1/accounts/remove', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id,
                        }),
                    });

                    modal.fire({
                        icon: 'success',
                        title: 'ดำเนินการลบ',
                        timer: 2000,
                        showConfirmButton: false,
                        showCancelButton: false,
                        toast: true,
                        position: 'top',
                    });

                    if (response.status == 200) {
                        router.reload();
                    }
                }
            });
    };

    const levelRole = { admin: 3, manager: 2, employee: 1 };
    const canManage = levelRole[clientRole] > levelRole[role];
    return (
        <div className="flex flex-row items-center w-full h-10 bg-white">
            {isTitle && (
                <React.Fragment>
                    <div className="flex w-1/12 m-2 py-1 justify-center rounded font-bold text-xl">{id}</div>
                    <div className="flex w-3/12 m-2 py-1 justify-center rounded font-bold text-xl">{name}</div>
                    <div className="flex w-3/12 m-2 py-1 justify-center rounded font-bold text-xl">{role}</div>
                    <div className="flex w-3/12 m-2 py-1 justify-center rounded font-bold text-xl">{username}</div>
                    <div className="flex w-1/12 m-2"></div>
                    <div className="flex w-1/12 m-2"></div>
                </React.Fragment>
            )}
            {!isTitle && (
                <React.Fragment>
                    <div className="flex w-1/12 justify-center m-2 py-1 justify-center rounded bg-gray-200 ">{id}</div>
                    <div className="flex w-3/12 justify-center m-2 py-1 justify-center rounded bg-gray-200 ">{name}</div>
                    <div className="flex w-3/12 justify-center m-2 py-1 justify-center rounded bg-gray-200 ">{role}</div>
                    <div className="flex w-3/12 justify-center m-2 py-1 justify-center rounded bg-gray-200 ">{username}</div>
                    <button
                        className={`flex w-1/12 m-2 py-1 justify-center rounded text-white bg-blue-600 ${
                            canManage ? 'hover:bg-blue-300 active:bg-blue-500 focus:outline-none' : 'cursor-not-allowed opacity-25 '
                        }`}
                        onClick={editHandler}
                        disabled={!canManage}
                    >
                        เเก้ไข
                    </button>
                    <button
                        className={`flex w-1/12 m-2 py-1 justify-center rounded text-white bg-red-600 ${
                            canManage ? 'hover:bg-red-300 active:bg-red-500 focus:outline-none' : 'cursor-not-allowed opacity-25 '
                        }`}
                        onClick={deleteHandler}
                        disabled={!canManage}
                    >
                        ลบ
                    </button>
                </React.Fragment>
            )}
        </div>
    );
};
export default AccountCard;
