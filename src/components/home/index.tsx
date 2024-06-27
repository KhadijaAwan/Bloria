import Categories from "./categories";
import Hero from "./hero";
import LatestBlogs from "./latestPosts";

export default function HomeComponent({ pageNumber }: { pageNumber: Number }) {
    return (
        <>
            <Hero />
            <Categories />
            <LatestBlogs pageNumber={pageNumber} categoryType="" />
        </>
    )
}