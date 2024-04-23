import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    return (
        <div className="border-2 flex items-center gap-10 rounded-lg p-20">
            <img className="h-[40vw] mb-10 rounded-md" src={coffee.photo} alt="" />
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">{coffee.name}</h1>
                <h2 className="text-2xl font-semibold">Chef : {coffee.chef}</h2>
                <h2 className="text-2xl font-semibold text-red-600">Remaining : {coffee.quantity}</h2>
                <p className="text-2xl font-semibold text-blue-600">Test : {coffee.test}</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;