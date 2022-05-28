//TODO: create a navbar at the bottom like in the buymeacoffee app

import { useEffect, useState } from "react";
import classNames from "../lib/tailwindClasses";
import { MailIcon, UserIcon, ViewGridIcon, ViewListIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const [show, setShow] = useState(true);
    let lastScroll: number;
    if (typeof window !== 'undefined') {
        lastScroll = window.scrollY;
    }

    const handleScroll = () => {
        if (window.scrollY >= lastScroll && window.scrollY > 0) {
            setShow(false);
        } else {
            setShow(true);
        }

        lastScroll = window.scrollY;
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


    return (
        <div
            className={classNames(
                show ? "" : " translate-y-40",
                "fixed grid grid-cols-3 bottom-8 bg-white h-20 w-64 left-1/2 -translate-x-1/2 rounded-3xl transition-all duration-300 ease-out",
                "items-center shadow-md"
            )}
        >
            <ViewGridIcon
                onClick={() => router.push("/posts")}
                className={classNames(
                    router.pathname === "/posts" ? "text-gray-500" : "text-gray-300",
                    "h-10 w-10 mx-auto sm:hover:scale-105 hover:active:scale-105 transition-all duration-300 ease-out",
                    "cursor-pointer"
                )}
            />
            <ViewListIcon
                onClick={() => router.push("/myposts")}
                className={classNames(
                    router.pathname === "/myposts" ? "text-gray-500" : "text-gray-300",
                    "h-10 w-10 mx-auto sm:hover:scale-105 hover:active:scale-105 transition-all duration-300 ease-out",
                    "cursor-pointer"
                )}
            />
            <UserIcon
                onClick={() => router.push("/profile")}
                className={classNames(
                    router.pathname === "/profile" ? "text-gray-500" : "text-gray-300",
                    "h-10 w-10 mx-auto sm:hover:scale-105 hover:active:scale-105 transition-all duration-300 ease-out",
                    "cursor-pointer"
                )}
            />
        </div>
    )
}

export default Navbar;
