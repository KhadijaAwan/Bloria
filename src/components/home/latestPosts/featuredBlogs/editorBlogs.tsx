import { fontSemibold } from "../../../style";
import { editorBlogLinks } from "../../../../utils/home/blogLinks";
import DisplayCards from "./displayCard";

export default function EditorBlogs() {
    return (
        <>
            <h4 className={`text-center sm:text-left text-xs`} style={{ lineHeight: '1.6' }}>
                Choosen by
            </h4>
            <h2 className={`${fontSemibold.className} text-center sm:text-left text-lg lg:text-xl mb-6`} style={{ lineHeight: '1.6' }}>
                Public Pick
            </h2>

            <DisplayCards displayLinks={editorBlogLinks} />
        </>
    )
}
