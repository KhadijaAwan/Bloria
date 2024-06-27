import FooterContent from "./content";
import FooterLinks from "./links";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row items-center py-3 gap-9 lg:gap-0">
            <FooterContent />
            <FooterLinks />
        </footer>
    )
}