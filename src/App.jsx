import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-4xl font-black">Welcome to my coffee store</h1>

      <div>
        <ul className="flex gap-1 list-none">
          <li className="px-4 py-2 bg-cyan-500">
            <Link className="underline underline-offset-2 text-blue-700 font-bold" to={'/addCoffee'}>Add more coffees</Link>
          </li>
          <li className="px-4 py-2 bg-cyan-500">
            <Link className="underline underline-offset-2 text-blue-700 font-bold" to={'/allUsers'}>Users</Link>
          </li>
          <li className="px-4 py-2 bg-cyan-500">
            <Link className="underline underline-offset-2 text-blue-700 font-bold" to={'/allCoffees'}>See all coffees</Link>
          </li>
          <li className="px-4 py-2 bg-cyan-500">
            <Link className="underline underline-offset-2 text-blue-700 font-bold" to={'/login'}>Log In</Link>
          </li>
          <li className="px-4 py-2 bg-cyan-500">
            <Link className="underline underline-offset-2 text-blue-700 font-bold" to={'/register'}>Register</Link>
          </li>
        </ul>
      </div>

      <Outlet></Outlet>

    </div>
  )
}

export default App
