import { useEffect, useState } from "react";
import classNames from "../lib/tailwindClasses";

const Topbar = () => {
    const [show, setShow] = useState(true);
    let lastScroll: number;
    if (typeof window !== 'undefined') {
        lastScroll = window.scrollY;
    }

    const handleScroll = () => {
        if (window.scrollY >= lastScroll) {
            setShow(false);
        } else {
            setShow(true);
        }

        if (window.scrollY <= 0) {
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
                show ? "" : "-translate-y-40",
                "fixed top-0 left-0 right-0 h-20 bg-base shadow-md transition-all duration-300 ease-in-out",
            )}
        >
            {/* <svg viewBox="0 0 500 130" preserveAspectRatio="xMinYMin meet" className="fixed -top-10 sm:-top-32">
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" className=" stroke-0 fill-base"></path>
            </svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="inline-block absolute sm:-top-10 left-0">
                <path className="fill-base"  d="M0,256L34.3,261.3C68.6,267,137,277,206,261.3C274.3,245,343,203,411,181.3C480,160,549,160,617,176C685.7,192,754,224,823,240C891.4,256,960,256,1029,229.3C1097.1,203,1166,149,1234,144C1302.9,139,1371,181,1406,202.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg> */}
        </div>
    )
}

export default Topbar;