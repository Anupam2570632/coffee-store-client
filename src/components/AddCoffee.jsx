import swal from "sweetalert";

const AddCoffee = () => {

    const handleSUbmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const quantity = form.quantity.value;
        const test = form.test.value;
        const photo = form.photo.value;

        const coffee = {
            name, chef, quantity, test, photo
        }

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Coffee added successfully!", {
                        icon: "success",
                    });
                    form.reset()
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
                            <input className="px-6 py-3 w-full" type="text" name="name" placeholder="Coffee Name" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-xl font-bold" htmlFor="chef">Chef</label>
                            <input className="px-6 py-3 w-full" type="text" name="chef" placeholder="Chef Name" />
                        </div>
                    </div>
                    <div className="lg:flex gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-xl font-bold" htmlFor="quantity">Available Quantity</label>
                            <input className="px-6 py-3 w-full" type="text" name="quantity" placeholder="Quantity" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-xl font-bold" htmlFor="test">Test</label>
                            <input className="px-6 py-3 w-full" type="text" name="test" placeholder="Test" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-xl font-bold" htmlFor="photo">Photo URL</label>
                        <input className="px-6 py-3 w-full" type="text" name="photo" placeholder="Photo URl" />
                    </div>
                    <div className="w-full">
                        <input className="btn btn-block btn-success px-6 py-3 " type="submit" value="Add Coffee" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;