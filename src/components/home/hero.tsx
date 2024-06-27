import Image from "next/image";
import { backgroundImage } from "../../../public/home";
import { fontSemibold, linkStyle } from "../style";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-[100%] mt-16">
            <h2 className={`${fontSemibold.className} text-blue-900 dark:text-blue-400 text-lg sm:text-xl lg:text-2xl px-0 md:px-10 text-center pt-7`} style={{ lineHeight: '1.6' }}>
                Welcome to Bloria, a vibrant community where each blog unfolds a unique narrative, inviting you to explore, create, and share your own story.
            </h2>

            <div className="flex flex-col lg:flex-row gap-4 items-center my-10 px-0 md:px-4">
                <Image src={backgroundImage} width={400} height={500} alt="blog-image" className="rounded-md" />
                <div className="flex flex-col lg:p-3">
                    <h3 className={`${fontSemibold.className} my-3 text-center lg:text-left text-lg`}>Embracing Nature&apos;s Bounty</h3>
                    <p className="text-sm text-center lg:text-justify mt-2 leading-5 dark:text-gray-200">In the hustle and bustle of modern life, finding solace in the tranquility of greenery is a timeless pleasure. Gardens, with their lush foliage and vibrant blooms, offer a sanctuary where one can escape into the soothing embrace of nature. From the delicate scent of freshly bloomed flowers to the crispness of verdant leaves, greenery gardens rejuvenate the senses and inspire a deeper connection with the natural world.</p>
                    <Link href="/compose" className={`${linkStyle} text-sm mb-3 w-max mx-auto mt-5 lg:mx-0 bg-purple-800 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-900 text-white rounded-md px-5 py-2`}>Post Now</Link>
                </div>
            </div>
        </section>
    );
}
