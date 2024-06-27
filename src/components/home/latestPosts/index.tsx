import { DateTime } from "next-auth/providers/kakao";
import BlogCards from "./blogCards";
import FeaturedBlogs from "./featuredBlogs";

export type HomeProps = {
    pageNumber: Number;
    categoryType: string;
};

export const formatDate = (dateString: DateTime) => {
    const [year, month, day] = dateString.substring(0, 10).split('-');
    return `${day}-${month}-${year}`;
};

export default function LatestBlogs({ pageNumber, categoryType }: HomeProps) {
    return (
        <section className="my-10 flex flex-col lg:flex-row">
            <BlogCards pageNumber={pageNumber} categoryType={categoryType} />
            <FeaturedBlogs />
        </section>
    )
}
