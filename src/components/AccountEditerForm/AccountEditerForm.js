import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AccountEditerForm = ({ editedAccount }) => {
    const router = useRouter();

    const [name, setName] = useState(editedAccount.name);
    const [role, setRole] = useState(editedAccount.role);

    const submitHandler = async (event) => {
        event.preventDefault();

        const id = editedAccount.id;
        const response = await fetch('/api/v1/accounts/updateProfile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                role,
                name,
            }),
        });

        if (response.status == 200) {
            Swal.fire({
                icon: 'success',
                title: 'ดำเนินการเเก้ไข',
                timer: 2000,
                showConfirmButton: false,
                showCancelButton: false,
                toast: true,
                position: 'top',
            });
            router.push('/manage');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'ไม่สามารถดำเนินการเเก้ไขได้',
                timer: 2000,
                showConfirmButton: false,
                showCancelButton: false,
                toast: true,
                position: 'top',
            });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <form className="flex flex-col w-5/12" onSubmit={submitHandler}>
                <div>
                    <p className="flex text-4xl font-bold mt-10 mt-4">ข้อมูลพนักงาน</p>
                    <p className="flex text-2xl font-bold mb-4">[ {editedAccount.id} : {editedAccount.username} ]</p>
                    <div className="flex flex-col">
                        <label className="text-lg">ชื่อ-นามสกุล</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none"
                            name="name"
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label className="text-lg">สถานะ</label>
                        <select
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none"
                            name="role"
                            onChange={(event) => {
                                setRole(event.target.value);
                            }}
                            required
                        >
                            <option selected={editedAccount.role == 'employee'} value="employee">
                                employee
                            </option>
                            <option selected={editedAccount.role == 'manager'} value="manager">
                                manager
                            </option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="p-2 mt-8 mb-20 text-white text-lg rounded-sm font-bold bg-blue-500 hover:bg-blue-700 active:bg-blue-900 focus:outline-none"
                >
                    เเก้ไข
                </button>
            </form>
        </div>
    );
};
export default AccountEditerForm;
