import Link from "next/link";
import Image from "next/image";
import { fontMedium, fontSemibold } from "../style";
import { categoryProps, getCategoryStyles } from "../types";

export const getCategories = async () => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/category`, { cache: "no-store" });
    return response.ok ? response.json() : "Failed to get categories!";
};

export default async function Categories() {
    const categoryLinks = await getCategories();

    return (
        <section className="w-[100%] my-10">
            <h2 className={`${fontSemibold.className} text-center sm:text-left text-lg lg:text-xl px-10 mb-7`} style={{ lineHeight: '1.6' }}>
                Popular Categories
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 px-10 gap-3'>
                {categoryLinks?.map((categoryLink: categoryProps, index: number) => {
                    const { bgColor, textColor } = getCategoryStyles(index);
                    return (
                        <Link aria-label="category button" key={categoryLink.id} href={categoryLink.link} className={`flex items-center justify-center p-3 rounded-lg ${bgColor}`}>
                            <Image src={categoryLink.image} alt={categoryLink.alt} width={20} height={20} className='mr-2' />
                            <h3 className={`${fontMedium.className} text-sm ${textColor}`}>{categoryLink.label}</h3>
                        </Link>
                    );
                }
                )}
            </div>
        </section>
    )
}