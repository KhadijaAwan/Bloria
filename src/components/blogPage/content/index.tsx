import FeaturedBlogs from "@/components/home/latestPosts/featuredBlogs";
import ContentSection from "./blogContent";
import { BlogDataProps } from "../../types";

export default function BlogContent({ blogData }: { blogData: BlogDataProps }) {
    return (
        <section className="mb-10 flex flex-col lg:flex-row">
            <ContentSection blogData={blogData} />
            <FeaturedBlogs />
        </section>
    )
}
