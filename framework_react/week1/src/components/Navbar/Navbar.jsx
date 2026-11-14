import logo from "../../assets/logo.png"
export default function Navbar() {
    return (
        <>
        <nav className="container mx-auto mt-5 px-4">
            <div className="flex items-center justify-between bg-amber-100 rounded-2xl shadow-md px-6 py-4">

                <div>
                    <img src={logo} width="100px" alt="Ecommerce Logo" />
                </div>

                <div>
                    <ul className="flex items-center gap-8">
                        <li className="font-semibold text-amber-950 hover:text-amber-600 transition duration-300 cursor-pointer">
                            Home
                        </li>
                        <li className="font-semibold text-amber-950 hover:text-amber-600 transition duration-300 cursor-pointer">
                            About
                        </li>
                        <li className="font-semibold text-amber-950 hover:text-amber-600 transition duration-300 cursor-pointer">
                            Contact
                        </li>
                        <li className="font-semibold text-amber-950 hover:text-amber-600 transition duration-300 cursor-pointer">
                            Docs
                        </li>
                        <li className="font-semibold text-amber-950 hover:text-amber-600 transition duration-300 cursor-pointer">
                            Blog
                        </li>
                        <li className="font-semibold text-amber-950 hover:text-amber-600 transition duration-300 cursor-pointer">
                            Pricing
                        </li>
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="bg-white text-amber-950 px-4 py-2 rounded-xl font-semibold hover:bg-amber-200 transition duration-300">
                        Login
                    </button>

                    <button className="bg-amber-700 text-white px-5 py-2 rounded-xl font-semibold hover:bg-amber-800 transition duration-300">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
        </>
    )
}
