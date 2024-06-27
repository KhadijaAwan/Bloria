import LatestBlogs from "@/components/home/latestPosts";
import { fontMedium } from "@/components/style";
import { Button } from "@/components/ui/button";

export default function Blog({ searchParams }: { searchParams: { pageNumber: string, categoryType: string } }) {
    const pageNumber = parseInt(searchParams.pageNumber) || 1;
    const categoryType = searchParams.categoryType;
    return (
        <>
            <Button className={`${fontMedium.className} w-[100%] mt-8 bg-purple-700 dark:bg-purple-700 hover:bg-purple-700 dark:hover:bg-purple-700 text-white text-base tracking-widest uppercase`}>{categoryType ? `${categoryType} Blogs` : "Your Blog Corner"}</Button>
            <LatestBlogs pageNumber={pageNumber} categoryType={categoryType} />
        </>
    );
}
