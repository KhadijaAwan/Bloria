import BlogSection from "@/components/blogPage";

const getBlogData = async (blogId: string) => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs/${blogId}`, { cache: "no-store" });
    return response.ok ? response.json() : "Failed to get blog!";
};

export default async function BlogPage({ params }: { params: { blogNum: string } }) {
    const blogData = await getBlogData(params.blogNum);
    return (
        <BlogSection blogData={blogData} />
    );
}
