import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    console.log(coffee)

    const handleSUbmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const quantity = form.quantity.value;
        const test = form.test.value;
        const photo = form.photo.value;
        const id = coffee._id

        const UpdateCoffee = {
            id, name, chef, quantity, test, photo,
        }
        console.log(UpdateCoffee)

        fetch('http://localhost:5000/coffees', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("Coffee Updated successfully!", {
                        icon: "success",
                    });
                }
            })
    }
    return (
        <div className="w-9/12 mx-auto bg-[#CCCCCC] lg:p-20 p-6 my-20 rounded-lg">
            <form onSubmit={handleSUbmit}>
                <div className="space-y-4">
                    <div className="lg:flex gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-xl font-bold" htmlFor="name">Name</label>
                            <input className="px-6 py-3 w-full" type="text" name="name" defaultValue={coffee.name} placeholder="Coffee Name" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-xl font-bold" htmlFor="chef">Chef</label>
                            <input className="px-6 py-3 w-full" type="text" name="chef" defaultValue={coffee.chef} placeholder="Chef Name" />
                        </div>
                    </div>
                    <div className="lg:flex gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-xl font-bold" htmlFor="quantity">Available Quantity</label>
                            <input className="px-6 py-3 w-full" type="text" name="quantity" defaultValue={coffee.quantity} placeholder="Quantity" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-xl font-bold" htmlFor="test">Test</label>
                            <input className="px-6 py-3 w-full" type="text" name="test" defaultValue={coffee.test} placeholder="Test" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-xl font-bold" htmlFor="photo">Photo URL</label>
                        <input className="px-6 py-3 w-full" type="text" name="photo" defaultValue={coffee.photo} placeholder="Photo URl" />
                    </div>
                    <div className="w-full">
                        <input className="btn btn-block btn-success px-6 py-3 " type="submit" value="Update Coffee" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;