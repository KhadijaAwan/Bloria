import Image from "next/image";
import { BlogDataProps } from "../types";
import { badgeStyle, fontMedium, fontNormal, fontSemibold } from "../style";
import { formatDate } from "../home/latestPosts";
import { Badge } from "../ui/badge";

export default function BlogHero({ blogData }: { blogData: BlogDataProps }) {
    return (
        <section className="flex flex-col-reverse md:flex-row px-2 md:px-3 lg:px-0 py-10 items-center gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 md:gap-8 w-[100%]">
                <h1 className={`${fontSemibold.className} text-center md:text-left text-lg md:text-xl lg:mt-4 lg:text-3xl w-[100%] lg:w-[520px] text-orange-500`} style={{ lineHeight: 1.4 }}>{blogData.label}</h1>
                <div className="flex gap-3 justify-center md:justify-start">
                    <Image src={blogData.user.image} alt="bloria-logo" className="rounded-full" width={36} height={36} />
                    <div className="flex flex-col gap-1">
                        <h3 className={`${fontMedium.className} text-sm`}>{blogData.user.name}</h3>
                        <h3 className={`${fontNormal.className} text-xs`}>{formatDate(blogData.createdAt)}</h3>
                    </div>
                </div>
                <Badge className={`${badgeStyle} mx-auto md:mx-0 w-max px-4 py-2 capitalize text-sm bg-orange-500 hover:bg-orange-600 text-white`}>{blogData.categoryNumber} Blog</Badge>
            </div>

            <div className="w-[250px] md:w-[340px] lg:w-[500px] xl:w-[610px] min-h-[180px] lg:min-h-[240px] relative">
                <Image src={blogData.image} alt="blog-image" fill className="rounded-md absolute" />
            </div>
        </section>
    )
}