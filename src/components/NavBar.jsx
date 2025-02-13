import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="border-b border-slate-300 py-4">
            <div className="container flex justify-between items-center">
                <h1 className="text-2xl font-bold text-teal-800">
                    ReactJob
                </h1>

                <ul className="flex gap-6 text-lg text-slate-800 font-semibold">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/job'>
                        <li>Jobs</li>
                    </Link>

                    <Link to='/addjob'>
                        <li>Add Job</li>
                    </Link>
                </ul>

                <div className="space-x-4">
                    <button className="bg-teal-800 text-white">
                        Regsier
                    </button>
                    <button className="border border-slate-300">
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}
export default NavBar