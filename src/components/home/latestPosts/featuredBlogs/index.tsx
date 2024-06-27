import BlogCategory from "./blogCategory";
import EditorBlogs from "./editorBlogs";
import PopularBlogs from "./popularBlogs";

export default function FeaturedBlogs() {
    return (
        <section className="w-[100%] lg:w-[69%] lg:pl-[5%] mt-12 lg:mt-0">
            <PopularBlogs />
            <BlogCategory />
            <EditorBlogs />
        </section>
    )
}