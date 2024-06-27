import Link from "next/link";
import Image from "next/image";
import { fontMedium, fontSemibold } from "../../../style";
import { categoryProps } from "@/components/types";
import { getCategories } from "../../categories";

export default async function BlogCategory() {
    const categoryLinks = await getCategories();

    return (
        <>
            <h4 className={`text-center sm:text-left text-xs mt-10`} style={{ lineHeight: '1.6' }}>
                Discover by topic
            </h4>
            <h2 className={`${fontSemibold.className} text-lg lg:text-xl mb-7 text-center sm:text-left`} style={{ lineHeight: '1.6' }}>
                Categories
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10'>
                {categoryLinks?.map((categoryLink: categoryProps) => (
                    <Link key={categoryLink.id} href={categoryLink.link} className={`flex items-center justify-center p-3 rounded-lg ${categoryLink.background}`}>
                        <Image src={categoryLink.image} alt={categoryLink.alt} width={18} height={18} className='mr-1' />
                        <h3 className={`${fontMedium.className} text-xs ${categoryLink.color} dark:${categoryLink.color}`}>{categoryLink.label}</h3>
                    </Link>
                ))}
            </div>
        </>
    )
}