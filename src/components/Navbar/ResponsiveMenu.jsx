import React  from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { NavbarLink } from "./Navbar";

const navbarLinks =[
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Blogs",
          link: "/blogs",
        },
        {
            name: "Best Places",
            link: "/places",
          },
      ] 

const ResponsiveMenu = ({ showMenu,setshowMenu}) => {
  return <div className={`${
    showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[55%]
    flex-col justify-between bg-white
    dark:text-white px-8 pb-6 pt-16 text-black
    transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
    <div className="Navbar_card">
        {/* top section */}
        <div>
            <div className="flex items-center justify-start gap-4">
            <FaUserCircle size={50} className="text-gray-500" />
            <div className="text-gray-500">
                <h1>Hello User</h1>
                <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
            </div>
        </div>
        {/* NavLInk Section */}
        <div className="text-black mt-12">
            <ul className="space-y-4 text-xl">
                
                   {
                   navbarLinks.map(({ name, link },index) => (
                     <li key={index}>
                        <Link to={link} onClick={() => setshowMenu(false)} className="m-5 inline-block" aria-label={name}>{ name }</Link>
                     </li>
                    ))
                    }
            </ul>
        </div>
    </div>

    
  </div>;
};

export default ResponsiveMenu;
