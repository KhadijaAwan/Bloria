import { fontSemibold, linkStyle } from "@/components/style";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import TotalComments from "./totalComments";
import Link from "next/link";
import { getSessionDetails } from "../../../utils/authentication";

import { revalidatePath } from "next/cache";

const postFormData = async (formData: FormData) => {
    "use server";
    const sessionData: any = await getSessionDetails();
    const userEmail = sessionData.user.email;
    const description = formData.get("description");
    const blogLabel = formData.get("blogLabel");

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/comments?blogLabel=${blogLabel}`,
        { method: "POST", body: JSON.stringify({ description, blogLabel, userEmail }), });

    revalidatePath(`/blog/${blogLabel}`);
    return response.ok ? response.json() : "Failed to post comment!";
}

export default async function CommentSection({ blogNum }: { blogNum: string }) {
    const session: any = await getSessionDetails();

    return (
        <section>
            {!session ? (
                <Link href="/login" aria-label="Login button" className={`${linkStyle} bg-blue-700 hover:bg-blue-800 text-sm text-white px-5 py-2 rounded-lg`}>
                    Login for Posting Comment
                </Link>
            ) : (
                <>
                    <h2 className={`${fontSemibold.className} text-lg lg:text-xl mb-5`} style={{ lineHeight: '1.6' }}>
                        Comments
                    </h2>

                    <form action={postFormData} className="grid w-full gap-2 mb-4">
                        <input name="blogLabel" defaultValue={blogNum} hidden />
                        <Textarea id="description" name="description" placeholder="Type your comment here." required />
                        <Button type="submit" aria-label="Submit button" className="bg-purple-800 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-900 text-white rounded-md">Send</Button>
                    </form>

                    <TotalComments blogNum={blogNum} />
                </>
            )}
        </section>
    );
}