import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const AllCoffees = () => {
    const loadedCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffee)

    const handleDelete = id => {
        console.log(id)

        swal({
            title: "Are you sure want to delete this coffee?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/coffees/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("This coffee has been deleted!", {
                                    icon: "success",
                                });
                                const remainingCoffee = coffees.filter(coffee => coffee._id !== id)
                                setCoffees(remainingCoffee)
                            }
                        })
                }
            });

    }
    return (
        <div className="my-32 space-y-10">
            <div className="text-2xl font-bold">
                all coffee : {coffees.length}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <div className="flex gap-6 items-center justify-between border bg-[#AAAA] p-6 rounded-xl" key={coffee._id}>
                        <img className="rounded-[8px]" src={coffee.photo} alt="" />
                        <div>
                            <h1 className="text-[24px] text-blue-800 font-bold">{coffee.name}</h1>
                            <p className="text-[18px] font-bold">Chef name: {coffee.chef}</p>
                            <p>Test : {coffee.test}</p>
                            <p className="text-[18px] font-bold">{coffee.quantity} Available</p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Link to={`/coffeeDetails/${coffee._id}`}>
                                    <button className="btn btn-outline btn-info text-xl flex items-center justify-center btn-circle"><BsEye></BsEye></button>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/updateCoffee/${coffee._id}`}>
                                    <button className="btn btn-outline text-xl flex items-center justify-center btn-circle"><RxUpdate></RxUpdate></button>
                                </Link>
                            </div>
                            <button onClick={() => handleDelete(coffee._id)} className="btn btn-outline btn-error text-xl flex items-center justify-center btn-circle"><MdDelete></MdDelete></button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCoffees;