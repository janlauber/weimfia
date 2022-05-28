import { PlusIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classNames from "../lib/tailwindClasses";

const Topbar = () => {
    const [show, setShow] = useState(true);
    const router = useRouter();
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
                show && router.pathname === "/posts" ? "opacity-100" : "opacity-0 translate-y-40",
                "fixed grid grid-cols-1 bottom-32 bg-main h-20 w-20 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 ease-out",
                "sm:hover:scale-105 hover:active:scale-105 transition-all duration-300 ease-out",
                "items-center shadow-lg shadow-light-shade"
            )}
        >
            <button
                type="button"
                className={classNames(
                    "text-white",
                    "mx-auto",
                    "cursor-pointer"
                )}>
                <PlusIcon className=" h-8 w-8" aria-hidden="true" />
            </button>
        </div>
    )
}

export default Topbar;