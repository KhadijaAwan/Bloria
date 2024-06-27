"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { githubLogo, googleLogo } from "../../../public/login";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginButtons() {
    const router = useRouter();
    const { status } = useSession();

    status === "authenticated" ? router.push("/") : null;

    return (
        <div className="grid gap-4">
            <Button className="w-full flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-900 text-white" onClick={() => { signIn("google"); }}>
                <Image src={googleLogo} alt="google-logo" width={18} height={18} />
                Login with Google
            </Button>
            <Button className="w-full flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-900 text-white" onClick={() => { signIn("github"); }}>
                <Image src={githubLogo} alt="google-logo" width={18} height={18} />
                Login with GitHub
            </Button>
        </div>
    )
}