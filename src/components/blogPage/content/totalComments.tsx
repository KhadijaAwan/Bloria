import Image from "next/image";
import { fontMedium, fontNormal } from "@/components/style";
import { CommentProps } from "@/components/types";
import { formatDate } from "@/components/home/latestPosts";

const getComments = async (blogNum: string) => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/comments?blogLabel=${blogNum}`, { cache: "no-store" });
    return response.ok ? response.json() : "Failed to get blog comments!";
};

export default async function TotalComments({ blogNum }: { blogNum: string }) {
    const comments = await getComments(blogNum);

    return (
        <>
            {comments.map((comment: CommentProps) => (
                <div className="flex flex-col gap-5 my-7 bg-gray-100 rounded-lg dark:bg-gray-900 p-4" key={comment.id}>
                    <div className="flex gap-3">
                        <Image src={comment.user.image} alt="user-img" className="rounded-full" width={36} height={36} />
                        <div className="flex flex-col gap-1">
                            <h3 className={`${fontMedium.className} text-sm text-purple-900 dark:text-purple-600`}>{comment.user.name}</h3>
                            <h3 className={`${fontNormal.className} text-xs text-gray-700 dark:text-gray-400`}>{formatDate(comment.createdAt)}</h3>
                        </div>
                    </div>
                    <p className="text-[12.5px] leading-6">{comment.description}</p>
                </div>
            ))}
        </>
    );
}