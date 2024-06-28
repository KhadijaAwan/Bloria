import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/utils/home";
import { logoImage } from "../../../public/home";
import { fontMedium } from "../style";

export default function FooterContent() {
    return (
        <section className="flex flex-col gap-4 w-[100%] lg:w-[92%] lg:pr-[8%]">
            <Link className="flex gap-1 dark:gap-2" href="/" aria-label="Home button">
                <Image src={logoImage} alt="bloria-logo" className="rounded-full" width={30} height={30} />
                <h3 className={`${fontMedium.className} text-lg text-purple-900 dark:text-purple-500 tracking-wider`}>Bloria Corner</h3>
            </Link>

            <p className="text-[12.5px] text-gray-800 dark:text-gray-300 text-center md:text-start lg:text-justify leading-6">Bloria is a dynamic blog application that allows users to post and view blogs across multiple categories. Users can easily explore diverse content and share their own insights on various topics.</p>

            <div className='flex justify-center lg:justify-start'>
                {socialLinks.map((socialLink) => (
                    <Link key={socialLink.id} href={socialLink.href} aria-label="Social button">
                        <Image src={socialLink.image} alt={socialLink.alt} width={28} height={28} className='mr-2 rounded-full' />
                    </Link>
                ))}
            </div>
        </section>
    )
}