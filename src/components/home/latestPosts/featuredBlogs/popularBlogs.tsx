import { fontSemibold } from "../../../style";
import { publicBlogLinks } from "../../../../utils/home/blogLinks";
import DisplayCards from "./displayCard";

export default function PopularBlogs() {
    return (
        <>
            <h4 className="text-center sm:text-left text-xs" style={{ lineHeight: '1.6' }}>
                What&apos;s the
            </h4>
            <h2 className={`${fontSemibold.className} text-center sm:text-left text-lg lg:text-xl mb-6`} style={{ lineHeight: '1.6' }}>
                Most Popular
            </h2>

            <DisplayCards displayLinks={publicBlogLinks} />
        </>
    );
}