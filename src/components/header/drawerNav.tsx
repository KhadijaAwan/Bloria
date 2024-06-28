import { Drawer, DrawerHeader, DrawerContent, DrawerFooter } from '../ui/drawer';
import { socialLinks } from "@/utils/home";
import Link from 'next/link';
import Image from 'next/image';
import AuthLink from './authLink';
import { fontMedium } from '../style';

type DrawerNavProps = {
    open: boolean;
    onClose: () => void;
};

const DrawerNav: React.FC<DrawerNavProps> = ({ open, onClose }) => {
    return (
        <Drawer open={open}>
            <DrawerContent onClose={onClose}>
                <DrawerHeader>
                    <div className='flex flex-col justify-center pt-4'>
                        <Link href="/" aria-label="Home button" className={`${fontMedium.className} mb-5 py-1 text-base text-purple-900 dark:text-purple-900`}>Home</Link>
                        <AuthLink />
                    </div>
                </DrawerHeader>
                <DrawerFooter>
                    <div className='flex justify-center mt-1 mb-3'>
                        {socialLinks.map((socialLink) => (
                            <Link key={socialLink.id} href={socialLink.href} aria-label="social button">
                                <Image src={socialLink.image} alt={socialLink.alt} width={30} height={30} className='mr-2' />
                            </Link>
                        ))}
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerNav;