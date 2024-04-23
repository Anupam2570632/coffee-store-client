import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const AllUsers = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    console.log(loadedUsers)


    const handleDelete = id => {
        console.log(id)

        swal({
            title: "Are you sure want to delete this user?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("This user has been deleted!", {
                                    icon: "success",
                                });
                                const remainingCoffee = users.filter(coffee => coffee._id !== id)
                                setUsers(remainingCoffee)
                            }
                        })
                }
            });

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Created At</th>
                            <th>Last Sign In At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInAt}</td>
                                <td onClick={() => handleDelete(user._id)}>
                                    <button className="btn btn-ghost btn-circle"><MdDeleteForever className="text-xl"></MdDeleteForever></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;