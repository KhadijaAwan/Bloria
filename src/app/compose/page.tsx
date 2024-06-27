import Link from "next/link";
import ComposeSection from "@/components/compose";
import { getSessionDetails } from "../../utils/authentication";

export default async function Compose() {
    const session = await getSessionDetails();

    return (
        !session ? (
            <div className="w-[100%] h-[450px] flex items-center justify-center">
                <Link href="/login" className="bg-blue-700 hover:bg-blue-800 text-sm text-white px-5 py-2 rounded-lg">
                    Login for Posting Your Blog
                </Link>
            </div>
        ) : <ComposeSection />
    )
}