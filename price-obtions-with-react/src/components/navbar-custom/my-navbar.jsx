import { useState } from "react";
import Link from "../link/Link";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


export default function MyNavbar() {

    const routes = [
        { name: "Home", path: "/", id: null },
        { name: "About", path: "/about", id: null },
        { name: "Products", path: "/products", id: null },
        { name: "Product Detail", path: "/products/:id", id: "id" },
        { name: "Not Found", path: "*", id: null },
    ];

    const [open, setOpen] = useState(false)


    return (
        <nav className="bg-neutral p-4 flex justify-between items-center">
            <div>
                <button className="btn btn-primary">Hello World!</button>
            </div>
            <div onClick={() => setOpen(!open)} className="md:hidden text-2xl w-max">
                {
                    open === true ? <RxCross2 /> : <FaBars />
                }
            </div>

            {/* <ul className={`md:hidden duration-1000 absolute bg-primary p-4 rounded-md text-white shadow-lg ${open ? 'top-12' : '-top-60'}`}>
                {
                    routes.map(
                        route => <Link key={route.id} route={route}></Link>
                    )
                }
            </ul> */}
            <ul className="hidden md:flex ">
                {
                    routes.map(
                        route => <Link key={route.name} route={route}></Link>
                    )
                }
            </ul>
        </nav>
    )
}