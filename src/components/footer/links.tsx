import { footerSocialLinks, footerTagsLinks, footerlinks } from "@/utils/footer/links";
import { fontMedium } from "../style";
import FooterLink from "./footerLink";

export default function FooterLinks() {
    return (
        <div className="flex w-[100%] lg:w-[60%] lg:pl-16 gap-8 lg:gap-9 xl:gap-11 justify-center lg:justify-end lg:pr-4">
            <div className="flex flex-col">
                <h2 className={`text-sm lg:text-base ${fontMedium.className} mb-3 text-purple-900 dark:text-purple-500 tracking-wider`}>Links</h2>
                <FooterLink getLinks={footerlinks} />
            </div>

            <div className="flex flex-col">
                <h2 className={`text-sm lg:text-base ${fontMedium.className} mb-3 text-purple-900 dark:text-purple-500 tracking-wider`}>Tags</h2>
                <FooterLink getLinks={footerTagsLinks} />
            </div>

            <div className="flex flex-col">
                <h2 className={`text-sm lg:text-base ${fontMedium.className} mb-3 text-purple-900 dark:text-purple-500 tracking-wider`}>Social</h2>
                <FooterLink getLinks={footerSocialLinks} />
            </div>
        </div>
    )
}