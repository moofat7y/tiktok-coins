import {
    Navbar,
    Typography,
    Input,
} from "@material-tailwind/react";
import React from "react";

// ---------------
import {BiSearch, BiPlus, BiMessageDots} from "react-icons/bi"
import {TbBrandTelegram} from "react-icons/tb"
// ---------------
import logo from "../../public/TikTok_logo.svg"
import user from "../../public/user.jpg"


const Nav = () => {
    return (
        <>
            <Navbar className="mx-auto px-4 py-3 shadow-sm w-full">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 text-blue-gray-900">
                {/* Logo  */}
                <Typography as="a" href="#" className="logo w-24 mr-4 ml-2 cursor-pointer py-1.5">
                <img src={logo} alt="logo" loading="lazy" className="max-w-full" />
                </Typography>
                {/* Search */}
                <div className="Search relative flex w-full gap-2 md:w-max">
                <Input
                    type="search"
                    label="Search"
                    className="pr-20 rounded-3xl bg-gray-50"
                    containerProps={{
                    className: "min-w-[288px]",
                    }}
                />
                <button className="!absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-lg">
                    <BiSearch />
                </button>
                </div>
                {/* Social */}
                <div className="social flex gap-4 items-center">
                <button className="px-5 py-1 border rounded-md flex gap-2 items-center text-lg font-medium">
                    <BiPlus className="text-xl font-medium" />
                    Upload
                </button>
                <TbBrandTelegram className="text-2xl cursor-pointer" />
                <div className="mess relative before:absolute before:p-2 before:text-white before:bg-red-500 before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:font-bold before:text-xs  before:content-['2'] before:-top-1/3 before:-right-1/3">
                    <BiMessageDots className="text-2xl cursor-pointer" />
                </div>
                <div className="user cursor-pointer h-10 w-10 rounded-full overflow-hidden">
                    <img src={user} alt="user-pic" loading="lazy" className="max-w-full" />
                </div>
                </div>
            </div>
            </Navbar>
        </>
    );
};

export default Nav;