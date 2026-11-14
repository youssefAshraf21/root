
export default function Navbar() {
    return (
        <>
        <div className="navbar container bg-amber-100 mx-auto py-4 mt-5 rounded-3xl px-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-semibold text-amber-950 text-2xl">Navbar</h1>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li className="font-semibold text-amber-950">Home</li>
                        <li className="font-semibold text-amber-950">Products</li>
                        <li className="font-semibold text-amber-950">About</li>
                        <li className="font-semibold text-amber-950">Contact</li>
                        <li className="font-semibold text-amber-950">Login</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
