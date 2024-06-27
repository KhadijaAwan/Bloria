import Link from "next/link";
import { linkStyle } from "../style";

interface GetLinksProps {
    id: string;
    href: string;
    title: string;
};

interface LinkProps {
    getLinks: GetLinksProps[];
};

export default function FooterLink({ getLinks }: LinkProps) {
    return (
        <section className="flex flex-col">
            {getLinks.map((getLink: GetLinksProps) => (
                <Link key={getLink.id} href={getLink.href} className={`${linkStyle} text-xs lg:text-[13px] mb-3 text-gray-800 dark:text-gray-300`}>{getLink.title}</Link>
            ))}
        </section>
    )
}