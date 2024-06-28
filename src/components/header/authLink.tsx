"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { fontMedium, linkStyle } from "../style";
import { Button } from "../ui/button";

export default function AuthLink() {
    const { status } = useSession();

    return (
        <div>
            {status === "unauthenticated" ? (
                <Link href="/login" aria-label="Login button" className={`${fontMedium.className} ${linkStyle} lg:mt-0 text-base text-purple-900 dark:text-purple-900 lg:dark:text-purple-500 rounded-md ml-auto mr-auto lg:ml-0 lg:mr-0`}>
                    Login
                </Link>
            ) : (
                <div className="flex flex-col lg:flex-row items-center">
                    <Link href="/compose" aria-label="Compose button" className={`${fontMedium.className} ${linkStyle} text-purple-900 dark:text-purple-900 lg:dark:text-purple-500 tracking-wider`}>
                        Compose
                    </Link>
                    <Button aria-label="Logout button" className={`${fontMedium.className} text-base text-purple-900 dark:text-purple-900 lg:dark:text-purple-500 bg-transparent hover:bg-transparent rounded-md mt-4 ml-auto mr-auto lg:ml-3 lg:mr-0 lg:mt-0`} onClick={() => signOut()}>
                        Logout
                    </Button>
                </div>
            )}
        </div>
    );
}
