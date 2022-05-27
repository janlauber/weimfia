import { useRouter } from "next/router";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import classNames from "../lib/tailwindClasses";
import Loading from "./Loading";
import Navbar from "./Navbar";

export default function Layout(props: any) {
    const { user, loading, error }: any = useUserContext();

    const router = useRouter();

    return (
        <div className="h-screen">
            {
                router.pathname != "/" ?
                    <Navbar /> :
                    null
            }
            {
                loading ?
                    <Loading /> :
                    <main className="">
                        {React.cloneElement(props.children)}
                    </main>
            }
        </div>
    )
}