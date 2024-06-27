import CommentSection from "./comments";
import { BlogDataProps } from "../../types";

export default function ContentSection({ blogData }: { blogData: BlogDataProps }) {
    return (
        <section className="flex flex-col gap-9 w-[100%]">
            <div className="text-xs text-justify leading-6" dangerouslySetInnerHTML={{ __html: blogData.description }} />

            <CommentSection blogNum={blogData.blogNum} />
        </section>
    );
}