
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

export default function Navbar() {

    const navLinkClass = ({ isActive }) =>
    `font-semibold transition duration-300 ${
        isActive
            ? "text-amber-600"
            : "text-amber-950 hover:text-amber-600"
    }`;
    return (
        <nav className="container sticky top-0 z-50 w-full mx-auto mt-5 px-4" >
            <div className="flex items-center justify-between bg-amber-100 rounded-2xl shadow-md px-6 py-4">

                <div>
                    <img src={logo} width="100px" alt="Ecommerce Logo" />
                </div>

                <div>
                    <ul className="flex items-center gap-8">
                        <li>
                            <NavLink to="/home" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={navLinkClass}>
                                Trending
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className={navLinkClass}>
                                Contact
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/map" className={navLinkClass}>
                                Map
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/blog" className={navLinkClass}>
                                Blog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/pricing" className={navLinkClass}>
                                Pricing
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-3">
                    <NavLink
                        to="/login"
                        className="bg-white text-amber-950 px-4 py-2 rounded-xl font-semibold hover:bg-amber-200 transition duration-300"
                    >
                        Login
                    </NavLink>

                    <button className="bg-amber-700 text-white px-5 py-2 rounded-xl font-semibold hover:bg-amber-800 transition duration-300">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
}
