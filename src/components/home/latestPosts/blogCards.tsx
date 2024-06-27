import { fontMedium, fontSemibold } from "../../style";
import Image from "next/image";
import Pagination from "./pagination";
import Link from "next/link";
import { formatDate } from ".";
import { BlogDataProps, blogCardsProps } from "@/components/types";

export const getBlogs = async (pageNumber: Number, categoryType: string) => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs/?pageNumber=${pageNumber}&categoryType=${categoryType || ""}`, { cache: "no-store" });
    return response.ok ? response.json() : "Failed to get blogs!";
};

export default async function BlogCards({ pageNumber, categoryType }: blogCardsProps) {
    const { blogs, count } = await getBlogs(pageNumber, categoryType);

    const blogPerPage = 4;
    const previousBlogs = blogPerPage * (Number(pageNumber) - 1) > 0;
    const nextBlogs = blogPerPage * (Number(pageNumber) - 1) + blogPerPage < count;

    return (
        <section className="w-[100%]">
            <h2 className={`${fontSemibold.className} text-center sm:text-left text-lg lg:text-xl px-10 mb-7`} style={{ lineHeight: '1.6' }}>
                Latest Posts
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 mb-10 md:mb-0'>
                {blogs.map((blog: BlogDataProps) => (
                    <div key={blog.id} className="flex flex-col md:flex-row justify-center md:justify-between gap-3">
                        <div className="grid grid-col-1 gap-7">
                            <div className="flex flex-col lg:flex-row lg:gap-4 items-center lg:items-start">
                                <div className="w-[250px] h-[230px] lg:w-[300px] lg:h-[168px] relative">
                                    <Image src={blog.image} fill alt="blog-image" className="rounded-md absolute" />
                                </div>
                                <div className="flex flex-col lg:p-3 lg:mt-[-8px] items-center lg:items-start text-center lg:text-left">
                                    <div className="flex gap-4 text-xs mb-4 mt-6 lg:mt-0">
                                        <h3>{formatDate(blog.createdAt)} {" "} - </h3>
                                        <h3 className={`uppercase text-orange-600 dark:text-orange-400 ${fontSemibold.className}`}>{blog.categoryNumber}</h3>
                                    </div>
                                    <h3 className={`${fontSemibold.className} text-base`}>{blog.label}</h3>
                                    <div className="text-xs lg:text-justify my-3 text-gray-800 dark:text-gray-300 leading-[20px]" dangerouslySetInnerHTML={{ __html: blog.description.substring(0, 200) }} />
                                    <Link href={`/blog/${blog.blogNum}`} className={`w-max text-[13px] text-blue-800 dark:text-blue-500 ${fontMedium.className}`} >Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination pageNumber={pageNumber} previousBlogs={previousBlogs} nextBlogs={nextBlogs} />
        </section>
    )
}