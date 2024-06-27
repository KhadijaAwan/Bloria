import BlogContent from "./content";
import BlogHero from "./hero";
import { BlogDataProps } from "../types";

export default function BlogSection({ blogData }: { blogData: BlogDataProps }) {
    return (
        <>
            <BlogHero blogData={blogData} />
            <BlogContent blogData={blogData} />
        </>
    )
}