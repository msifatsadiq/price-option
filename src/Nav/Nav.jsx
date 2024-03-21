import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Nav = () => {
    const [open, setOpen] = useState([]);
    let routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/services', name: 'Services' }
    ];
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="bg-red-200 p-4 ">
                {
                    open === true ? <IoIosCloseCircleOutline className="text-2xl"></IoIosCloseCircleOutline>
                        : <HiOutlineMenuAlt1 className="text-2xl md:hidden"></HiOutlineMenuAlt1>
                }

            </div>
            <ul className={`md:flex w-full gap-10 absolute md:static p-4 bg-fuchsia-100
            ${open ? 'top-16' : '-top-36'} px-8 duration-1000 
            `}>
                {
                    routes.map(route => <li key={route.id}>
                        <a href={route.path}>{route.name}
                        </a></li>)
                }
            </ul>
        </nav>
    );
};


export default Nav;