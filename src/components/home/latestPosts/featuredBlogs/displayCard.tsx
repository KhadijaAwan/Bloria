import { Badge } from "../../../ui/badge";
import { badgeStyle, fontMedium, fontSemibold } from "../../../style";
import { displayLinksProps } from "@/components/types";

export default function DisplayCards({ displayLinks }: { displayLinks: displayLinksProps[] }) {
    return (
        <>
            {displayLinks.map((displayLink: displayLinksProps) => (
                <div className="mb-6 text-center sm:text-left" key={displayLink.date}>
                    <Badge aria-label="category button" className={`${badgeStyle} ${displayLink.bg} hover:${displayLink.bg}`}>{displayLink.category}</Badge>
                    <h4 className={`text-[12px] my-2 ${fontMedium.className} text-gray-800 dark:text-gray-200`}>{displayLink.content}</h4>
                    <div className="flex justify-center sm:justify-start text-xs mt-2">
                        <h3 className={`${displayLink.color} ${fontSemibold.className}`}>{displayLink.category} {"  "}-{"  "} </h3>
                        <h3 className="text-gray-700 dark:text-gray-300">{displayLink.date}</h3>
                    </div>
                </div>
            ))}
        </>
    )
}